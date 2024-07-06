"use client";
import { MangareaderInfo, FlamecomicsInfo } from "./types";
import { imageFetcher } from "./request";

import Image from "next/image";
import { useState, Key } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const ChapterSelector = ({
	data,
	provider,
}: {
	data: MangareaderInfo | FlamecomicsInfo;
	provider: string;
}) => {
	const [showImages, setImages] = useState<JSX.Element>(<></>);

	const getImages = async (id: string) => {
		var loading = (
			<span className="loading loading-infinity loading-lg mt-2"></span>
		);
		setImages(loading);
		const data = await imageFetcher(id, provider);
		const format = (
			<div className="mt-4">
				{data &&
					data.results.map(
						(
							item: string | StaticImport,
							index: Key | null | undefined
						) => (
							<Image
								key={index}
								width={720}
								height={2717}
								src={`https://sup-proxy.zephex0-f6c.workers.dev/api-content?url=${item}`}
								alt="Manga Page"
								className="w-full h-auto lg:max-w-lg m-auto"
								priority
							></Image>
						)
					)}
			</div>
		);
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
