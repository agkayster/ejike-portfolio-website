import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProjectComponent = ({ projectList, x }) => {
	return (
		/* PROJECT CONTAINER */
		<div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
			<motion.div style={{ x }} className='flex'>
				<div
					className='h-screen w-screen flex items-center justify-center 
        bg-gradient-to-r from-purple-300 to-red-300'
				/>
				{projectList &&
					projectList.map(({ id, color, title, desc, img, link }) => (
						<div
							key={id}
							className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${color}`}>
							<div className='flex flex-col gap-8 text-white'>
								<h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl'>
									{title}
								</h1>
								<div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px]'>
									<Image
										src={img}
										alt='images'
										fill
										className='absolute'
									/>
								</div>
								{/* <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
												<Image
													src={img}
													alt='images'
													fill
													className='absolute'
												/>
											</div> */}
								<p className='w-80 md:w-96 lg:w-[500px] xl:w-[600px] lg:text-lg'>
									{desc}
								</p>
								<Link href={link} className='flex justify-end'>
									<button
										className='p-2 text-sm md:p-4 md:text-base lg:p-8 lg:text-lg bg-white
												 text-gray-600 font-semibold m-4 rounded'>
										See Demo
									</button>
								</Link>
							</div>
						</div>
					))}
			</motion.div>
		</div>
	);
};

export default ProjectComponent;
