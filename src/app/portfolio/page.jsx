'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { projectList } from '@/Utils/projectList';
import ProjectComponent from '@/components/project';
import ProjectContComponent from '@/components/projectContact';

const PortfolioPage = () => {
	const portfolioRef = useRef();

	const { scrollYProgress } = useScroll({ target: portfolioRef });

	const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}>
			<div className='h-[600vh] relative' ref={portfolioRef}>
				<div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>
					My Works
				</div>
				<ProjectComponent projectList={projectList} x={x} />
			</div>
			<ProjectContComponent />
		</motion.div>
	);
};

export default PortfolioPage;
