"use client";
import { MangareaderInfo, FlamecomicsInfo, Mangapill } from "./types";
import { imageFetcher } from "./request";
import ImageDisplay from "./imagesDisplay";

import { useState } from "react";

const ChapterSelector = ({
	data,
	provider,
}: {
	data: MangareaderInfo | FlamecomicsInfo | Mangapill;
	provider: string;
}) => {
	const [showImages, setImages] = useState<JSX.Element>(<></>);

	const getImages = async (id: string) => {
		var loading = (
			<span className="loading loading-infinity loading-lg mt-2"></span>
		);
		setImages(loading);
		const data = await imageFetcher(id, provider);
		const format = await ImageDisplay(data, provider);
		setImages(format);
	};

	return (
		<div>
			<select
				className="select select-bordered w-full"
				onChange={async (event) => {
					getImages(event.target.value);
				}}
			>
				{data.results.chapters &&
					data.results.chapters.map((item, index) => (
						<option value={item.id} key={index}>
							{item.title}
						</option>
					))}
			</select>
			<div className="flex items-center justify-center">{showImages}</div>
		</div>
	);
};

export default ChapterSelector;
