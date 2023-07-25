const HomePage = () => {
  return (
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://image.cnbcfm.com/api/v1/image/106679202-1598456726245-gettyimages-1263710914-img_3459_2020080325950390.jpeg?v=1625050975&w=740&h=416&ffmt=webp&vtcrop=y"
            class="d-block w-100"
            alt="img"
          ></img>
        </div>
        <div class="carousel-item">
          <img
            src="https://cdn.vox-cdn.com/thumbor/gNdYMxPrbWTh26tfaiRsvc8Ttf4=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21829337/GettyImages_1263710238.jpg"
            class="d-block w-100"
            alt="..."
          ></img>
        </div>
        <div class="carousel-item">
          <img
            src="https://media.npr.org/assets/img/2023/07/11/ap18201175644704_custom-2b055e8357dfef27042b1c1cfb6fa98c62176034.jpg"
            class="d-block w-100"
            alt="..."
          ></img>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomePage;
