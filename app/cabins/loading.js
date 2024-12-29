import Spinner from "../_components/Spinner"

export default function Loading() {
    return (
        <div className="grid justify-center items-center">
            <Spinner />
            <p className=" text-xl text-primary-200">
                Loading... Please wait a moment.
            </p>
        </div>
    )
}


