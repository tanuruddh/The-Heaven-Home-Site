import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
    const { cabinId } = params;
    try {
        console.log('cabinnnnnn', cabinId);
        const [cabin, bookedDates] = await Promise.all(
            [
                getCabin(cabinId),
                getBookedDatesByCabinId(cabinId),
            ]
        )
        return Response.json({ cabin, bookedDates })
    } catch (error) {
        return Response.json({ message: "Cabin not found" });
    }

}