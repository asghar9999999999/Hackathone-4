import Header from "../../homepage/components/header";
import Footer from "../../homepage/components/footer";
export default function InviteAFriend() {
    return (
        <div>
            <Header />
            <div className="max-w-7xl mx-auto p-4">
                <h1 className="text-4xl font-bold text-center my-8">Invite a Friend</h1>
                <p className="text-lg text-gray-700 text-center mb-6">
                    Invite your friends and enjoy exclusive rewards!
                </p>
                <div className="text-center">
                    <input
                        type="email"
                        placeholder="Friend's Email"
                        className="border p-2 w-full max-w-md mx-auto mb-4"
                    />
                    <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                        Send Invitation
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
