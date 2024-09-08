import List from "@/components/Home/list";
import Distance from "@/components/Home/distance";
import Rating from "@/components/Home/rating";
import GoogleMapComponent from "@/components/Home/GoogleMap";

export default function Home() {
  return (
    <div className="lg:grid lg:grid-cols-12 h-screen bg-[#cccccc] top-0 mt-0 ">
      <div className="lg:col-span-3 bg-[#cccccc] border-r-2 border-[#a5a5a5] mt-0 top-0">
        <List></List>
        <Distance></Distance>
        <Rating></Rating>
      </div>
      <div className="lg:col-span-9 bg-[#cccccc]">
        <GoogleMapComponent></GoogleMapComponent>
      </div>
    </div>
  );
}
