"use client";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import completeAnimation from "/public/complete.json";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function Complete() {
  const router = useRouter();

  return (
    <div className="container">
      <div className="complete__wrapper">
        <div className="complete__container">
          <div className="complete__icon">
            <div className="complete__animation">
              <Lottie
                animationData={completeAnimation}
                play
                loop={false}
                style={{ width: 110, height: 110 }}
              />
            </div>
          </div>
          <div className="complete__span">
            <span className="complete__title">주문 완료</span>
            <span className="complete__desc1">주문하신 음식을</span>
            <span className="complete__desc2">정성껏 조리하고 있어요!</span>
          </div>
        </div>
      </div>

      <div className="bottom__wrapper container">
        <Button className={"sub__button"} onClick={() => router.push("/main")}>
          메뉴 보기
        </Button>
        <Button
          className={"main__button"}
          onClick={() => router.push("/result")}
        >
          주문내역 보기
        </Button>
      </div>
    </div>
  );
}
