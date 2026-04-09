import { useState, useEffect, useRef } from "react";
import Button from "../atoms/Button.jsx";
import { ArrowRight, ArrowLeft, Star, Trash, SquarePen } from "lucide-react";
import MovieCard from "../molecules/MovieCard.jsx";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useMovieStore from "../../store/useMovieStore.jsx";

const Management = () => {
  const { movies, loading, fetchMovies, addMovie, updateMovie, deleteMovie } =
    useMovieStore();
  const [title, setTitle] = useState("");
  const [star, setStar] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !star.trim()) return;

    const movieData = { title, star: Number(star) };

    if (editId) {
      await updateMovie(editId, movieData);
      setEditId(null);
    } else {
      await addMovie(movieData);
    }
    setTitle("");
    setStar("");
  };
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Hapus film ini?");
    if (confirmDelete) {
      await deleteMovie(id);
    }
  };

  const handleEdit = (m) => {
    setEditId(m._id || m.id);
    setTitle(m.title);
    setStar(m.star);
  };
  const sliderRef = useRef(null);
  const slide = (direction) => {
    const { current } = sliderRef;
    const scrollAmount = 300;
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <section className="h-full flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mt-4">Manage Movies</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md mt-5 space-y-4">
        <div>
          <label className="block mb-1">Judul Film</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Masukan Judul"
            className="w-full p-2 border rounded text-white"
          />
        </div>
        <div>
          <label className="block mb-1">Rating</label>
          <input
            type="number"
            step="0.1"
            max="5"
            value={star}
            onChange={(e) => setStar(e.target.value)}
            placeholder="0 - 5"
            className="w-full p-2 border rounded text-white"
          />
        </div>
        <Button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {editId ? "Update Film" : "Tambah Film"}
        </Button>
      </form>

      <div className="flex flex-col items-center w-full mt-10 px-4">
        <h3 className="text-xl font-semibold mb-4">Daftar Film</h3>
        <div className="relative group w-full max-w-[1280px] h-auto object-contain mt-5 md:h-[260px]">
          <button
            onClick={() => slide("left")}
            className="absolute rounded-full left-[-25px] top-1/2 -translate-y-1/2 z-10 bg-[rgba(47,51,52,1)] p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
          >
            <ArrowLeft />
          </button>

          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto md:overflow-x-hidden pb-4"
          >
            {loading ? (
              <p>Loading...</p>
            ) : (
              movies?.map((m) => (
                <div
                  key={m._id || m.id}
                  className="flex-none w-40 bg-gray-800 p-3 rounded-lg hover:scale-110"
                >
                  <img
                    src={m.photos}
                    alt={m.title}
                    className="w-full h-40 object-cover rounded"
                  />
                  <h4 className="font-bold mt-2 truncate">{m.title}</h4>
                  <p className="text-sm flex items-center gap-1">
                    <Star size={14} /> {m.star}
                  </p>

                  <div className="flex justify-between mt-3">
                    <Button
                      onClick={() => handleEdit(m)}
                      className="p-2 bg-yellow-500 rounded"
                    >
                      <SquarePen size={16} />
                    </Button>
                    <Button
                      onClick={() => handleDelete(m._id || m.id)}
                      className="p-2 bg-red-500 rounded"
                    >
                      <Trash size={16} />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
          <Button
            onClick={() => slide("right")}
            className="absolute rounded-full right-[-25px] right-0 top-1/2 -translate-y-1/2 z-10 bg-[rgba(47,51,52,1)] p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Management;

export const Section5 = () => {
  const { movies, fetchMovies } = useMovieStore();

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const sliderRef = useRef(null);
  const slide = (direction) => {
    const { current } = sliderRef;
    const scrollAmount = 300;
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <section className="mx-auto pl-5 min-w-85 max-w-360 h-48 mt-5 md:py-10 md:px-20 md:h-128 ">
      <h3 className="text-bold text-xl leading-[120%] tracking-normal md:text-[32px] md:leading-[110%]">
        Segera Hadir
      </h3>
      <div className="relative group w-full max-w-[1280px] h-auto object-contain mt-5 md:h-[365px]">
        <Button
          onClick={() => slide("left")}
          className="absolute rounded-full left-[-25px] top-1/2 -translate-y-1/2 z-10 bg-[rgba(47,51,52,1)] p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
        >
          <ArrowLeft />
        </Button>

        <div
          ref={sliderRef}
          className="flex gap-4 md:gap-6 w-full overflow-x-auto scroll-smooth md:overflow-hidden h-full snap-x snap-mandatory"
        >
          {movies?.slice(0, 100).map((movie) => (
            <div
              key={movie.id}
              className="shrink-0 snap-start h-full md:hover:scale-110"
            >
              <MovieCard variant="v2">
                <MovieCard.Image
                  variant="var2"
                  src={movie.photos}
                  alt={movie.title}
                />
                <MovieCard.TitleRate name={movie.title} rate={movie.star} />
              </MovieCard>
            </div>
          ))}
        </div>

        <Button
          onClick={() => slide("right")}
          className="absolute rounded-full right-[-25px] right-0 top-1/2 -translate-y-1/2 z-10 bg-[rgba(47,51,52,1)] p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
        >
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
};
