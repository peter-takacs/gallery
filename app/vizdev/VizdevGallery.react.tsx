import Gallery, { Image as GalleryImage } from "@/components/Gallery.react";
import LightboxContextProvider from "@/components/LightboxContextProvider.react";

import SprKalmanMichelle06PropDesign from "@/public/2019_Spr_Kalman_Michelle_06_PropDesign.jpg";
import SprKalmanMichelle07PropStoryMoment from "@/public/2019_Spr_Kalman_Michelle_07_PropStoryMoment.jpg";
import SprKalmanMichelle10Environment2 from "@/public/2019_Spr_Kalman_Michelle_10_Environment2.jpg";
import KalmanMichelleFinalCharacterKyi from "@/public/Kalman_Michelle_Final_CharacterKyi.jpg";
import KalmanMichelleFinalCharacterMaung from "@/public/Kalman_Michelle_Final_CharacterMaung.jpg";
import KalmanMichelleFinalCharacterTurnaround from "@/public/Kalman_Michelle_Final_CharacterTurnaround.jpg";
import KalmanMichelleFinalVehicleBreakaway from "@/public/Kalman_Michelle_Final_VehicleBreakaway.jpg";
import KalmanMichelleFinalEstablishingShot from "@/public/Kalman_Michelle_Final_EstablishingShot.jpg";
import KalmanMichelleFinalStoryMoment from "@/public/Kalman_Michelle_Final_StoryMoment.jpg";
import KalmanMichelleFinalVehicle from "@/public/Kalman_Michelle_Final_Vehicle.jpg";
import kalmanMichelletest2 from "@/public/kalman_Michelle_test2.jpg";
import kalmanMichelletestideations from "@/public/kalman_Michelle_testideations.jpg";
import kalmanMichelletreasurebox2 from "@/public/kalman_Michelle_treasurebox2.jpg";
import svp2 from "@/public/svp2.jpg";
import svp6 from "@/public/svp6.jpg";
import svp7 from "@/public/svp7.jpg";

export default function VizdevGallery() {
  const sections: { title: string; images: GalleryImage[] }[] = [
    {
      title: "Ponya",
      images: [
        { src: KalmanMichelleFinalCharacterKyi, title: "Character: Kyi" },
        { src: KalmanMichelleFinalCharacterMaung, title: "Character: Maung" },
        {
          src: KalmanMichelleFinalCharacterTurnaround,
          title: "Character turnaround",
        },
        {
          src: KalmanMichelleFinalVehicleBreakaway,
          title: "Vehicle Breakaway",
        },
        {
          src: KalmanMichelleFinalEstablishingShot,
          title: "Establishing Shot",
        },
        { src: KalmanMichelleFinalStoryMoment, title: "Story Moment" },
        { src: KalmanMichelleFinalVehicle, title: "Vehicle" },
      ],
    },
    {
      title: "Treehouse Test",
      images: [
        { src: kalmanMichelletest2, title: "Treehouse Test" },
        { src: kalmanMichelletestideations, title: "Ideations" },
        { src: kalmanMichelletreasurebox2, title: "Treasure Box" },
      ],
    },
    {
      title: "Second Variety",
      images: [
        { src: svp2, title: "svp2" },
        { src: svp6, title: "svp6" },
        { src: svp7, title: "svp7" },
      ],
    },
    {
      title: "The Book Thief",
      images: [
        { src: SprKalmanMichelle06PropDesign, title: "Prop Design" },
        { src: SprKalmanMichelle07PropStoryMoment, title: "Prop Story Moment" },
        { src: SprKalmanMichelle10Environment2, title: "Environment 2" },
      ],
    },
  ];
  const images = [];
  for (const section of sections) {
    images.push(...section.images);
  }
  return (
    <div>
      <LightboxContextProvider images={images}>
        {sections.map(({ title, images }) => (
          <Gallery key={title} title={title} images={images} />
        ))}
      </LightboxContextProvider>
    </div>
  );
}
