import { Results } from "./types";

import Image from "next/image";
import Link from "next/link";

const ResultsFormatter = async (data: Results, provider: string) => {
	return (
		<div className="grid grid-cols-2 gap-3 mt-4 lg:grid-cols-3">
			{data &&
				data.results.map((item, index) => (
					<div
						key={index}
						className="card card-compact bg-base-100 w-48 shadow-md"
					>
						<figure>
							<Image
								src={item.image}
								alt="Manga Poster"
								width={150}
								height={200}
								className="h-64 w-auto"
								priority
							></Image>
						</figure>
						<div className="card-body">
							<h2 className="card-title max-h-20 h-20 text-center overflow-auto">
								{item.title}
							</h2>
							<p className="text-sm text-gray-500">
								Status: {item.status}
							</p>
							<p className="text-sm text-gray-500">
								Chapters: {item.chapters || "?"}
							</p>
							<p className="text-sm text-gray-500">
								Genre: {item.genres ? item.genres[0] : "?"}
							</p>
							<div className="card-actions justify-end">
								<Link href={`/read/${provider}/${item.id}`}>
									<button className="btn btn-primary btn-sm">
										Read more
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default ResultsFormatter;
