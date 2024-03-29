import React from 'react';
import { motion } from 'framer-motion';

const ExperienceComponent = ({ experienceRef, isExperienceRefInView }) => {
	return (
		/* EXPERIENCE CONTAINER */
		<div
			className='flex flex-col gap-12 justify-center pb-48'
			ref={experienceRef}>
			{/* EXPERIENCE TITTLE */}
			<motion.h1
				initial={{ x: '-350px' }}
				animate={isExperienceRefInView ? { x: 0 } : {}}
				transition={{ delay: 0.2 }}
				className='font-bold text-2xl'>
				EXPERIENCE
			</motion.h1>
			{/* 1st EXPERIENCE LIST ITEM*/}
			<motion.div
				initial={{ x: '-350px' }}
				animate={isExperienceRefInView ? { x: 0 } : {}}
				className='flex justify-between h-48'>
				{/* LEFT SIDE */}
				<div className='w-1/3'>
					{/* LEFT JOB TITLE */}
					<h1 className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
						Full-Stack Engineer
					</h1>
					{/* LEFT JOB DESCRIPTION */}
					<p className='p-3 text-sm italic'>
						I build mobile and web applications to solve problems.
					</p>
					{/* LEFT JOB DATE */}
					<p className='p-3 text-red-400 text-xs md:text-sm font-semibold'>
						2023 - Present
					</p>
					{/* LEFT JOB COMPANY */}
					<p className='p-1 rounded bg-white text-sm font-semibold w-fit'>
						BlueFlame Engineering Limited
					</p>
				</div>
				{/* CENTER */}
				<div className='w-1/6 flex justify-center'>
					{/* CENTER LINE */}
					<div className='w-1 h-[130%] bg-gray-600 rounded relative'>
						{/* CIRCLE ON TOP LINE */}
						<div className='absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2'></div>
					</div>
				</div>
				{/* RIGHT SIDE */}
				<div className='w-1/3'></div>
			</motion.div>
			{/* 2nd EXPERIENCE LIST ITEM*/}
			<div className='flex flex-row justify-between h-48'>
				{/* LEFT SIDE */}
				<div className='w-1/3'></div>
				{/* CENTER */}
				<div className='w-1/6 flex justify-center'>
					{/* CENTER LINE */}
					<div className='w-1 h-[130%] bg-gray-600 rounded relative'>
						{/* CIRCLE ON TOP LINE */}
						<div className='absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2'></div>
					</div>
				</div>
				{/* RIGHT SIDE */}
				<div className='w-1/3'>
					{/* RIGHT JOB TITLE */}
					<h1 className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
						Full-Stack React Developer (remote)
					</h1>
					{/* RIGHT JOB DESCRIPTION */}
					<p className='p-3 text-sm italic'>
						I worked in a cross-functional team with other Software
						Engineers to build a Famelab/Fameapp portal that
						integrates with LinkedIn.{' '}
					</p>
					{/* RIGHT JOB DATE */}
					<p className='p-3 text-red-400 text-xs md:text-sm font-semibold'>
						02/2023 - 03/2023
					</p>
					{/* RIGHT JOB COMPANY */}
					<p className='p-1 rounded bg-white text-sm font-semibold w-fit'>
						FameLab.io/ SecondCompany.nl, Netherlands
					</p>
				</div>
			</div>
			{/* 3rd EXPERIENCE LIST ITEM*/}
			<div className='flex flex-row justify-between h-48'>
				{/* LEFT SIDE */}
				<div className='w-1/3'>
					{/* RIGHT JOB TITLE */}
					<h1 className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
						Software Developer{' '}
					</h1>
					{/* RIGHT JOB DESCRIPTION */}
					<p className='p-3 text-sm italic'>
						I built responsive web applications for the Bavarian
						ministry of transport and for a private Pet insurcance
						organization in munich, Germany{' '}
					</p>
					{/* RIGHT JOB DATE */}
					<p className='p-3 text-red-400 text-xs md:text-sm font-semibold'>
						05/2022 - 02/2023{' '}
					</p>
					{/* RIGHT JOB COMPANY */}
					<p className='p-1 rounded bg-white text-sm font-semibold w-fit'>
						Digital Product School
					</p>
				</div>
				{/* CENTER */}
				<div className='w-1/6 flex justify-center'>
					{/* CENTER LINE */}
					<div className='w-1 h-[130%] bg-gray-600 rounded relative'>
						{/* CIRCLE ON TOP LINE */}
						<div className='absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2'></div>
					</div>
				</div>
				{/* RIGHT SIDE */}
				<div className='w-1/3'></div>
			</div>
		</div>
	);
};

export default ExperienceComponent;
