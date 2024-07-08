"use server";

import Image from "next/image";
import { Key } from "react";

const ImageDisplay = async (data: any, provider: string) => {
	var mangapillCondition: boolean;
	if (provider == "mangapill") {
		mangapillCondition = true;
	}
	return (
		<div className="mt-4">
			{data &&
				data.results.map(
					(item: string, index: Key | null | undefined) => (
						<Image
							key={index}
							width={720}
							height={2717}
							src={
								mangapillCondition
									? `https://manga-scrapers.onrender.com/${provider}/images/${item}`
									: item
							}
							alt="Manga Page"
							className="w-full h-auto"
							priority
						></Image>
					)
				)}
		</div>
	);
};

export default ImageDisplay;
