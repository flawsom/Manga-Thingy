import ResultsFormatter from "../components/formatter";
import { MangareaderLatest } from "../components/request";

const MangaReaderLatestMangas = async () => {
	const data = await MangareaderLatest();
	const format = await ResultsFormatter(data, "flamescans");

	return <div className="lg:w-1/2 m-auto">{format}</div>;
};

export default MangaReaderLatestMangas;
