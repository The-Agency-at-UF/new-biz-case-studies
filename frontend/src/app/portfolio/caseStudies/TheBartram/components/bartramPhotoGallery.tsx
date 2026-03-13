    import "../../../../../app/globals.css";
    export default function BartramPhotoGallery() {
    return (
      <div className="relative">
        <div className="scrollHide relative bg-[#A4D1D9] flex flex-nowrap overflow-x-scroll w-full h-70 inset-0 gap-10 sm:gap-20">
          <img src="/assets/TheBartram/photo_gallery_1.png" className="w-full h-auto z-1"></img><br></br>
          <img src="/assets/TheBartram/photo_gallery_2.png" className="relative w-full h-auto z-3"></img>
          <img src="/assets/TheBartram/photo_gallery_3.png" className="relative w-full h-auto z-1"></img>
          <img src="/assets/TheBartram/photo_gallery_4.png" className="relative w-full h-auto z-3"></img>
          <img src="/assets/TheBartram/photo_gallery_5.png" className="relative w-full h-auto z-1"></img>
          <img src="/assets/TheBartram/photo_gallery_6.png" className="relative w-full h-auto z-3"></img>
        </div>
        <img src="/assets/TheBartram/dots_circle_green.png" className="absolute left-30 top-50 w-15 lg:w-30 h-auto z-2"></img>
        <img src="/assets/TheBartram/dots_rectangle_green.png" className="absolute right-10 bottom-60 w-15 lg:w-30 h-auto z-3"></img>
      </div>
    );
}