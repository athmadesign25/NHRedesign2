"use client";

import React, { useState, useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Play, Stethoscope, Users, Building2, Activity, Clock, Calendar } from "lucide-react";
import styles from "./HeroSection.module.css";
import SplitText from "@/components/ui/SplitText";
import MagneticButton from "@/components/ui/MagneticButton";

/* Floating tag badge, like in the reference */
function FloatingBadge({
  icon,
  label,
  delay,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  delay: number;
  className: string;
}) {
  return (
    <motion.div
      className={`${styles.floatBadge} ${className}`}
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.badgeIconWrap}>{icon}</div>
      <span className={styles.badgeLabel}>{label}</span>
    </motion.div>
  );
}

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
  };

  return (
    <section className={styles.hero} id="hero-section">
      <div className={styles.inner}>

        {/* ── LEFT: Content panel (clean white) ── */}
        <div 
          className={styles.leftPanel}
          style={{
            background: isHovered ? "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0) 100%)" : "transparent",
            transition: "background 0.5s ease"
          }}
        >



          <div className={styles.headlineWrap}>
            <SplitText
              text="Healthcare for"
              tag="h1"
              className={styles.headline}
              delay={0.05}
            />
            <SplitText
              text="Personalised"
              tag="h1"
              className={`${styles.headline} ${styles.headlineAccent}`}
              delay={0.15}
            />
            <SplitText
              text="Wellness Solutions"
              tag="h1"
              className={styles.headline}
              delay={0.25}
            />
          </div>

          <motion.p
            className={styles.subtext}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            World-class specialists, JCI-accredited hospitals, and personalised care — 
            all within reach. Book your appointment in under 60 seconds.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <Link href="/doctors" className={styles.primaryCta} id="hero-book-btn">
              <Calendar size={18} />
              Book Appointment
              <ChevronRight size={16} />
            </Link>

            <Link href="/" className={styles.secondaryCta} id="hero-find-hospital">
              <Building2 size={18} />
              Find a Hospital
              <ChevronRight size={18} />
            </Link>
          </motion.div>


        </div>

        {/* ── RIGHT: Image panel — no overlay, image fully visible ── */}
        <div 
          className={styles.rightPanel}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className={styles.imageWrap}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/Hero image.png"
              alt="Narayana Health specialist with a patient"
              fill
              priority
              className={styles.heroImage}
              sizes="50vw"
            />
            <video
              ref={videoRef}
              src="/Hero Video.mp4"
              muted
              loop
              playsInline
              className={styles.heroImage}
              style={{
                position: "absolute",
                opacity: isHovered ? 1 : 0,
                transition: "opacity 0.4s ease",
                pointerEvents: "none"
              }}
            />
          </motion.div>

          {/* Floating interactive badges over the image */}
          <FloatingBadge
            icon={<Stethoscope size={14} />}
            label="Surgical Department"
            delay={1.0}
            className={styles.badgeTopLeft}
          />

          <FloatingBadge
            icon={<Users size={14} />}
            label="Healthy Patients"
            delay={1.15}
            className={styles.badgeMiddle}
          />

          <FloatingBadge
            icon={<Activity size={14} />}
            label="Advanced Robotics"
            delay={1.3}
            className={styles.badgeTopRight}
          />

          <FloatingBadge
            icon={<Clock size={14} />}
            label="24/7 Emergency Care"
            delay={1.45}
            className={styles.badgeBottomLeft}
          />
        </div>

      </div>
    </section>
  );
}
