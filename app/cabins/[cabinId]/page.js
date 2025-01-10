import Cabin from "@/app/_components/Cabin";
import DateSelector from "@/app/_components/DateSelector";
import Reservation from "@/app/_components/Reservation";
import ReservationForm from "@/app/_components/ReservationForm";
import Spinner from "@/app/_components/Spinner";
import TextExpander from "@/app/_components/TextExpander";
import { getCabin } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
    const paramsData = await params;
    console.log(paramsData);
    const { name } = await getCabin(paramsData.cabinId);

    return { title: `Cabin ${name}` }
}

export default async function Page({ params }) {
    const paramsData = await params;
    console.log(paramsData);
    const cabin = await getCabin(paramsData.cabinId);

    return (
        <div className="max-w-6xl mx-auto mt-8">

            <Cabin cabin={cabin} />

            <div>
                <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
                    Reserve {cabin.name} today. Pay on arrival.
                </h2>
            </div>
            <Suspense fallback={<Spinner />} >
                <Reservation cabin={cabin} />
            </Suspense>
        </div>
    );
}
