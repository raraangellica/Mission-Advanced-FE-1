import { create } from "zustand";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const useMovieStore = create((set) => ({
  movies: [],
  loading: true,
  error: null,

  fetchMovies: async () => {
    try {
      const res = await axios.get(`${apiUrl}/newMovie`);
      set({ movies: res.data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  addMovie: async (newMovie) => {
    try {
      const res = await axios.post(`${apiUrl}/newMovie`, newMovie);
      set((state) => ({ movies: [res.data, ...state.movies], loading: false }));
      alert("Movie berhasil ditambahkan!");
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  updateMovie: async (itemId, updatedData) => {
    try {
      const res = await axios.put(`${apiUrl}/newMovie/${itemId}`, updatedData);

      set((state) => ({
        movies: state.movies.map((m) => (m.id === itemId ? res.data : m)),
        loading: false,
      }));
      alert("Movie berhasil diperbarui!");
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  deleteMovie: async (itemId) => {
    try {
      await axios.delete(`${apiUrl}/newMovie/${itemId}`);
      set((state) => ({
        movies: state.movies.filter((m) => m.id !== itemId),
        loading: false,
      }));
      alert("Movie berhasil dihapus!");
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));
export default useMovieStore;
