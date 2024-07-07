import ResultsFormatter from "../../components/formatter";
import { MangareaderLatest } from "../../components/request";
import Link from "next/link";
const MangaReaderLatestMangas = async () => {
	const data = await MangareaderLatest("added");
	const format = await ResultsFormatter(data, "flamescans");

	return (
		<div className="lg:w-7/12 m-auto">
			<div className="breadcrumbs text-sm mt-4">
				<ul>
					<li>
						<Link href={"/"}>Homepage</Link>
					</li>
					<li>
						<a>Latest</a>
					</li>
				</ul>
			</div>
			{format}
		</div>
	);
};

export default MangaReaderLatestMangas;
