import CardPixel from "@/components/Card/CardPixel";
import InputPixel from "@/components/Input/InputPixel";
import ButtonPixel from "@/components/Button/ButtonPixel";

export default function LoginPage() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <CardPixel  title="Account" size="w-[480px]">
                <form>
                    <div className="space-y-2">
                        <div>
                            <InputPixel label="email" type="email" />
                        </div>
                        <div>
                            <InputPixel label="password" type="password" />
                        </div>
                        <div>
                            <ButtonPixel type="submit">Login</ButtonPixel>
                        </div>
                    </div>
                </form>
            </CardPixel>
        </div>
    )
}