import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const lexend = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Manga Thingy",
	description: "Website where you can read mangas and manhwas for free",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={lexend.className}>
				<div>
					<div className="navbar bg-primary text-primary-content flex justify-between">
						<Link href="/">
							<button className="btn btn-ghost text-xl">
								manga thingy
							</button>
						</Link>
						<div>
							<Link
								href={"https://github.com/real-zephex"}
								target="_blank"
							>
								<button className="btn btn-neutral btn-sm mr-2">
									Github
								</button>
							</Link>

							<input
								type="checkbox"
								value="light"
								className="toggle theme-controller"
							/>
						</div>
					</div>
				</div>
				{children}
			</body>
		</html>
	);
}
