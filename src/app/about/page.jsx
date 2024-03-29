'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useInView } from 'framer-motion';
import BrainComponent from '@/components/brain';


import BiographyComponent from '@/components/biography';
import SkillsComponent from '@/components/skills';
import ExperienceComponent from '@/components/experience';

const AboutPage = () => {
	const containerRef = useRef();

	const { scrollYProgress } = useScroll({ container: containerRef });

	const skillRef = useRef();

	const isSkillRefInView = useInView(skillRef);

	// below is for the animation to happen once
	// const isSkillRefInView = useInView(skillRef, { once: true });

	const experienceRef = useRef();

	const isExperienceRefInView = useInView(experienceRef);

	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}>
			{/* Container */}
			<div className='h-full overflow-scroll lg:flex' ref={containerRef}>
				{/* TEXT CONTAINER */}
				<div
					className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 
				lg:w-2/3 lg:pr-0'>
					<BiographyComponent />
					<SkillsComponent
						isSkillRefInView={isSkillRefInView}
						skillRef={skillRef}
					/>
					<ExperienceComponent
						experienceRef={experienceRef}
						isExperienceRefInView={isExperienceRefInView}
					/>
				</div>
				{/* SVG CONTAINER */}
				<div className='hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2'>
					<BrainComponent scrollYProgress={scrollYProgress} />
				</div>
			</div>
		</motion.div>
	);
};

export default AboutPage;
