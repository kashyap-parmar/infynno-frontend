import { HomeComponent } from "@/component";
import { API_BASE } from "@/utils/constant";

// ------------------------------------------------

const getData = async () => {
	return await fetch(`${API_BASE}/api/v1/properties`).then((res) => res.json())
}

export default async function Home() {
	const data = await getData();
	return (
		<HomeComponent data={data} />
	);
}
