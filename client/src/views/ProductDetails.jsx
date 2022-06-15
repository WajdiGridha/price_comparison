import React from "react";
import GenericSection from "../components/sections/GenericSection";
import { api } from "../utils/client";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

function useQueryParams() {
	const { search } = useLocation();

	return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Products = () => {
	let query = useQueryParams();

	let prodLink = query.get("link");

	const { data, isLoading } = useQuery(
		`productdetail?url=${prodLink}`,
		() => api.get(`productdetail?url=${prodLink}`),
		{ refetchOnMount: false }
	);

	const verifPrice = (priceObj) => {
		const neededKeys = ["image", "link", "market", "price", "title"];

		let verify = neededKeys.every((key) =>
			Object.keys(priceObj).includes(key)
		);

		return verify;
	};

	const parsePrice = (priceMixed) => {
		let [price, date] = priceMixed.split("DT");

		return { price: `${price} DT`, date: date.replace("*", "") };
	};

	return (
		<React.Fragment>
			<GenericSection topDivider>
				{isLoading ? (
					<div className="container px-5 py-2 mx-auto">
						<div class="flex items-center justify-center space-x-2">
							<svg
								role="status"
								class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
								viewBox="0 0 100 101"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
									fill="currentColor"
								/>
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="currentFill"
								/>
							</svg>
						</div>
						<div className="flex items-center justify-center space-x-2 py-24 text-gray-500">
							We're searching for prices, Please wait ....
						</div>
					</div>
				) : (
					<div className="container px-5 py-2 mx-auto">
						<div className="lg:w-4/5 mx-auto flex flex-wrap">
							<img
								alt="ecommerce"
								className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
								src={data?.cover}
							/>
							<div className="lg:w-1/2 w-full lg:pl-10 lg:py-2 mt-2 lg:mt-0">
								<h2 className="text-sm title-font text-gray-500 tracking-widest">
									{data?.marque.trim()}
								</h2>
								<h1 className="text-white text-xl title-font font-medium mb-1">
									{data?.title}
								</h1>
								
								<p className="leading-relaxed">
									{data?.category}
								</p>
								<div className="flex">
									<span className="title-font font-medium text-2xl text-white">
										{data?.price}
									</span>
									<button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded" >
										 <a href={data.urlMarket} > <span className="text-white"> voir l'offre </span> </a>
									</button>
								</div>
							</div>
						</div>
						<div className="flex flex-col text-center w-full mb-20">
							<h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
								Pricing
							</h1>
							<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
								{data?.shortDesc}
							</p>
						</div>
						<div className="lg:w-2/3 w-full mx-auto overflow-auto">
							<table className="table-auto w-full text-left whitespace-no-wrap">
								<thead>
									<tr>
										<th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">
											Title
										</th>
										<th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
											Market
										</th>
										<th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
											Update Date
										</th>
										<th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
											Price
										</th>
									</tr>
								</thead>
								<tbody>
									{data &&
										data.prices_table?.map((price, key) => {
											if (verifPrice(price)) {
												let parsedPriceDate =
													parsePrice(price.price);
												return (
													<tr key={key}>
														<td className="border-t-2 border-gray-800 px-4 py-3">
															{price.title}
														</td>
														<td className="border-t-2 border-gray-800 px-4 py-3">
															<a
																href={
																	price.link
																}
																target="_blank"
															>
																<img
																	className="w-20 h-16 inline-flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"
																	src={
																		price.market
																	}
																/>
															</a>
														</td>
														<td className="border-t-2 border-gray-800 px-4 py-3">
															{
																parsedPriceDate.date
															}
														</td>
														<td className="border-t-2 border-gray-800 px-4 py-3 text-lg text-white">
															{
																parsedPriceDate.price
															}
														</td>
													</tr>
												);
											}
										})}
								</tbody>
							</table>
						</div>
					</div>
				)}
			</GenericSection>
		</React.Fragment>
	);
};
export default Products;
