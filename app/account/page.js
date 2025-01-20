import { auth } from "../_lib/auth";

export const metadata = {
    title: "Guest area",
};

async function page() {
    const session = await auth();
    const firsName = session.user.name.split(' ').at(0);
    return (
        <h1>
            Welcome {firsName}
        </h1>
    )
}

export default page
