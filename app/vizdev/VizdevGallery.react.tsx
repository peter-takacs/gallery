import Image from "next/image";
import Gallery from "@/app/Gallery.react";

import SprKalmanMichelle06PropDesign from "@/public/2019_Spr_Kalman_Michelle_06_PropDesign.jpg";
import SprKalmanMichelle07PropStoryMoment from "@/public/2019_Spr_Kalman_Michelle_07_PropStoryMoment.jpg";
import SprKalmanMichelle10Environment2 from "@/public/2019_Spr_Kalman_Michelle_10_Environment2.jpg";
import KalmanMichelleFinalCharacterKyi from "@/public/Kalman_Michelle_Final_CharacterKyi.jpg";
import KalmanMichelleFinalEstablishingShot from "@/public/Kalman_Michelle_Final_EstablishingShot.jpg";
import KalmanMichelleFinalProps from "@/public/Kalman_Michelle_Final_Props.jpg";
import KalmanMichelleFinalStoryMoment from "@/public/Kalman_Michelle_Final_StoryMoment.jpg";
import KalmanMichelleFinalVehicle from "@/public/Kalman_Michelle_Final_Vehicle.jpg";
import cat from "@/public/cat.jpg";
import cat2 from "@/public/cat2.jpg";
import cat3 from "@/public/cat3.jpg";
import kalmanMichelletest2 from "@/public/kalman_Michelle_test2.jpg";
import kalmanMichelletestideations from "@/public/kalman_Michelle_testideations.jpg";
import kalmanMichelletreasurebox2 from "@/public/kalman_Michelle_treasurebox2.jpg";
import svp2 from "@/public/svp2.jpg";
import svp6 from "@/public/svp6.jpg";
import svp7 from "@/public/svp7.jpg";

export default function VizdevGallery() {
  const ponya = [
    { src: KalmanMichelleFinalEstablishingShot },
    { src: KalmanMichelleFinalStoryMoment },
    { src: KalmanMichelleFinalCharacterKyi },
    { src: KalmanMichelleFinalProps },
    { src: KalmanMichelleFinalVehicle },
  ];
  const treehouseTest = [
    { src: kalmanMichelletest2 },
    { src: kalmanMichelletestideations },
    { src: kalmanMichelletreasurebox2 },
  ];
  const secondVariety = [{ src: svp2 }, { src: svp6 }, { src: svp7 }];
  const theBookThief = [
    { src: SprKalmanMichelle06PropDesign },
    { src: SprKalmanMichelle07PropStoryMoment },
    { src: SprKalmanMichelle10Environment2 },
  ];
  return (
    <div>
      <Gallery title="Ponya" images={ponya} />
      <Gallery title="Treehouse Test" images={treehouseTest} />
      <Gallery title="Second Variety" images={secondVariety} />
      <Gallery title="The Book Thief" images={theBookThief} />
    </div>
  );
}
