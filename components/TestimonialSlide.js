import React, { Component } from "react";
import Slider from "react-slick";

export default class TestimonialSlide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="md:px-10">
        <Slider {...settings}>
          <div className="pr-5">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-[30px]">
                <p className="mb-[30px] text-primary">
                  “Buku ini membantu banget buat kalian yang mau cobain
                  tailwind, lengkap mulai dari instalasi sampai ke
                  penggunaannya. Penjelasannya lengkap & enak dibaca kok :”
                </p>
                <div className="flex space-x-5">
                  <div>
                    <img src="/images/testimonials/testi-1.png" alt="slide-1" />
                  </div>
                  <div>
                    <h5 className="text-primary font-medium">Ahmad Saugi</h5>
                    <span className="inline-block text-sm text-primary/80 font-medium">
                      Mahasiswa
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pr-5">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-[30px]">
                <p className="mb-[30px] text-primary">
                “Terimakasih atas bukunya mas. Sangat membantu saya yang masih pemula dalam proses memahami taildwindcss. Isinya cukup lengkap dan detail.”
                </p>
                <div className="flex space-x-5">
                  <div>
                    <img src="/images/testimonials/testi-2.png" alt="slide-1" />
                  </div>
                  <div>
                    <h5 className="text-primary font-medium">Agung Perdana</h5>
                    <span className="inline-block text-sm text-primary/80 font-medium">
                      Front-end Enginer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-[30px]">
                <p className="mb-[30px] text-primary">
                “Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”
                </p>
                <div className="flex space-x-5">
                  <div>
                    <img src="/images/testimonials/testi-3.png" alt="slide-1" />
                  </div>
                  <div>
                    <h5 className="text-primary font-medium">
                      Lutfi Hanafiah Ramadhan
                    </h5>
                    <span className="inline-block text-sm text-primary/80 font-medium">
                      IT Support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pr-5">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-[30px]">
                <p className="mb-[30px] text-primary">
                “Terimakasih atas bukunya mas. Sangat membantu saya yang masih pemula dalam proses memahami taildwindcss. Isinya cukup lengkap dan detail.”
                </p>
                <div className="flex space-x-5">
                  <div>
                    <img src="/images/testimonials/testi-2.png" alt="slide-1" />
                  </div>
                  <div>
                    <h5 className="text-primary font-medium">Eka Pradana</h5>
                    <span className="inline-block text-sm text-primary/80 font-medium">
                      backend Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pr-5">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-[30px]">
                <p className="mb-[30px] text-primary">
                “Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”
                </p>
                <div className="flex space-x-5">
                  <div>
                    <img src="/images/testimonials/testi-1.png" alt="slide-1" />
                  </div>
                  <div>
                    <h5 className="text-primary font-medium">Rico Ardyan</h5>
                    <span className="inline-block text-sm text-primary/80 font-medium">
                      Mahasiswa
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-[30px]">
                <p className="mb-[30px] text-primary">
                  “Buku ini membantu banget buat kalian yang mau cobain
                  tailwind, lengkap mulai dari instalasi sampai ke
                  penggunaannya. Penjelasannya lengkap & enak dibaca kok :)”
                </p>
                <div className="flex space-x-5">
                  <div>
                    <img src="/images/testimonials/testi-3.png" alt="slide-1" />
                  </div>
                  <div>
                    <h5 className="text-primary font-medium">Vico Pratama</h5>
                    <span className="inline-block text-sm text-primary/80 font-medium">
                      Web Designer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pr-5">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-[30px]">
                <p className="mb-[30px] text-primary">
                  “Buku ini membantu banget buat kalian yang mau cobain
                  tailwind, lengkap mulai dari instalasi sampai ke
                  penggunaannya. Penjelasannya lengkap & enak dibaca kok :)”
                </p>
                <div className="flex space-x-5">
                  <div>
                    <img src="/images/testimonials/testi-1.png" alt="slide-1" />
                  </div>
                  <div>
                    <h5 className="text-primary font-medium">Ahmad Saugi</h5>
                    <span className="inline-block text-sm text-primary/80 font-medium">
                      Mahasiswa
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pr-5">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-[30px]">
                <p className="mb-[30px] text-primary">
                “Terimakasih atas bukunya mas. Sangat membantu saya yang masih pemula dalam proses memahami taildwindcss. Isinya cukup lengkap dan detail.”
                </p>
                <div className="flex space-x-5">
                  <div>
                    <img src="/images/testimonials/testi-2.png" alt="slide-1" />
                  </div>
                  <div>
                    <h5 className="text-primary font-medium">Agung Perdana</h5>
                    <span className="inline-block text-sm text-primary/80 font-medium">
                      Front-end Enginer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-[30px]">
                <p className="mb-[30px] text-primary">
                “Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”
                </p>
                <div className="flex space-x-5">
                  <div>
                    <img src="/images/testimonials/testi-3.png" alt="slide-1" />
                  </div>
                  <div>
                    <h5 className="text-primary font-medium">
                      Lutfi Hanafiah Ramadhan
                    </h5>
                    <span className="inline-block text-sm text-primary/80 font-medium">
                      IT Support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
