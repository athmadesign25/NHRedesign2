"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./CentreOfExcellence.module.css";
import Link from "next/link";
import advanceHeartCareImg from "../../../public/Advance Heart Care.png";
import oncologyInstituteImg from "../../../public/Oncology Institute.png";
import brainAndSpineImg from "../../../public/Brain and Spine.png";
import boneAndJointImg from "../../../public/Bone & Joint.png";

const CARDS = [
  {
    id: "card-cardiac",
    category: "Cardiac Science",
    title: "Advanced Heart Care",
    desc: "Comprehensive cardiology services including complex adult and pediatric heart surgeries, heart transplants, and interventional cardiology with cutting-edge technology.",
    img: advanceHeartCareImg, // User requested image
    link: "/specialities/cardiology",
  },
  {
    id: "card-cancer",
    category: "Cancer Care",
    title: "Oncology Institute",
    desc: "A multidisciplinary approach to cancer treatment offering medical, surgical, and radiation oncology with precise diagnostics and personalized care plans.",
    img: oncologyInstituteImg, // User requested image
    link: "/specialities/oncology",
  },
  {
    id: "card-neuro",
    category: "Neurosciences",
    title: "Brain & Spine",
    desc: "Advanced treatment for neurological disorders including stroke management, brain tumor surgery, epilepsy treatment, and minimally invasive spine surgeries.",
    img: brainAndSpineImg, // User requested image
    link: "/specialities/neurology",
  },
  {
    id: "card-ortho",
    category: "Orthopedics",
    title: "Bone & Joint Health",
    desc: "Expert care for musculoskeletal conditions with advanced joint replacements, sports medicine, and comprehensive rehabilitation programs.",
    img: boneAndJointImg, // User requested image
    link: "/specialities/orthopedics",
  },
  {
    id: "card-gastro",
    category: "Gastro Sciences",
    title: "Digestive Health",
    desc: "Expert care for digestive and liver conditions involving advanced endoscopy, GI surgeries, and liver transplant procedures in highly specialized units.",
    img: "/assets/doctor_team.png",
    link: "/specialities/gastroenterology",
  }
];

export default function CentreOfExcellence() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className={`section ${styles.section}`} id="centre-of-excellence">
      <div className="container">
        {/* Header with Navigation */}
        <div className={styles.headerWrap}>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-eyebrow">
              CENTRES OF EXCELLENCE
            </div>
            <h2 className={styles.title}>Pioneering Medical Specialities</h2>
            <p className={styles.subtitle}>
              World-class medical expertise delivered by our distinguished institutions across India.
            </p>
          </motion.div>

          <div className={styles.navButtons}>
            <button className={styles.navBtn} onClick={scrollLeft} aria-label="Previous">
              <ChevronLeft size={24} />
            </button>
            <button className={styles.navBtn} onClick={scrollRight} aria-label="Next">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className={styles.carouselWrapper}>
          <div 
            className={styles.carousel} 
            ref={carouselRef}
            role="group" 
            aria-label="Centres of Excellence Carousel"
          >
            {CARDS.map((card, index) => (
              <motion.div 
                key={card.id}
                className={styles.slide}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={styles.card} data-animation-zoom="true">
                  <div className={styles.cardImgWrap}>
                    <Link href={card.link}>
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        className={styles.cardImg}
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </Link>
                  </div>
                  
                  <div className={styles.cardInfo}>
                    <div className={styles.cardCategory}>{card.category}</div>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDesc}>{card.desc}</p>
                    
                    <div>
                      <Link href={card.link} className={styles.cardCta}>
                        Know more
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
