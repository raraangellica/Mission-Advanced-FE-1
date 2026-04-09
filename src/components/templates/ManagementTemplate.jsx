import Management from "../organisms/Management";
import { Navbar } from "../molecules/Navbar";
import { ProfileMenu } from "../molecules/ProfileMenu";
import Footer from "../molecules/Footer";

const ManagementTemplate = () => {
  return (
    <div>
      <div className="flex justify-between items-center h-min-14 h-max-24">
        <Navbar />
        <ProfileMenu />
      </div>
      <Management />
      <Footer />
    </div>
  );
};

export default ManagementTemplate;
