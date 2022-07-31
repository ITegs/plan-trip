import React, { useEffect, useState } from "react";
import "./Photos.css";
import ImageGallery from "react-image-gallery";

export default function Photos() {
  const [liste, setListe] = useState<any>([]);

  const getData = () => {
    fetch("api/img/images.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        generateGalleryArray(myJson);
      });
  };

  function generateGalleryArray(myJson: any) {
    var array: any[] = [];
    myJson.map((l: String, i: number) =>
      array.unshift({
        original: "api/img/" + l,
        thumbnail: "api/img/" + l,
      })
    );

    setListe(array);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="photoContainer">
      {/* <div className="photoTitle">Fotos</div> */}
      <ImageGallery
        items={liste}
        showBullets={true}
        showIndex={true}
        lazyLoad={true}
      />
    </div>
  );
}
