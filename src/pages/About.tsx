import React from "react";
import Text from "../components/Text";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <div className="w-11/12 md:w-10/12 mx-auto py-8 text-black">
        <h1 className="font-black text-[2rem] md:text-[3rem] my-3 font-[Italiana]">
          About Us
        </h1>
        <Text>
          At Design Elementary a unit of Vrisan Group, we believe in the power
          of exceptional design to transform spaces and enhance lives. As a
          leading architectural and interior design firm based in India, we
          specialize in creating bespoke solutions that reflect our clients'
          unique vision and aspirations.
          <br />
          <br />
          With a team of highly skilled architects, interior designers, and
          project managers, we are dedicated to delivering unparalleled
          excellence in every project we undertake. From residential homes and
          commercial spaces to hospitality and retail environments, we bring
          creativity, innovation, and expertise to every aspect of design.
          <br />
          <br />
          Our approach is rooted in collaboration and communication, ensuring
          that our clients are actively involved in the design process from
          conception to completion. By understanding their needs, preferences,
          and goals, we craft customized solutions that exceed expectations and
          inspire admiration.
          <br />
          <br />
          Driven by a passion for design excellence, we constantly strive to
          push the boundaries of creativity and innovation. From
          conceptualization and planning to execution and finishing touches, we
          pay meticulous attention to detail, ensuring that every element of our
          design reflects sophistication, functionality, and timeless elegance.
          <br />
          <br />
          At Design Elementary, we don't just create spaces; we curate
          experiences. Whether it's transforming a house into a dream home or
          shaping a commercial space into a thriving hub of activity, we are
          committed to making every project a success story.
          <br />
          <br />
          Discover the transformative power of design with Design Elementary.
          Let us bring your vision to life and create spaces that inspire,
          delight, and leave a lasting impression.
        </Text>
      </div>
    </>
  );
}
