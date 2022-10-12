import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};

const Payment = () => {
  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp58383030");
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card", // vbank -> 무통장 입금 (가상 계좌)
        // !! 상품 ID칸, 중복될 시, 결제 거부됨 !!
        name: "희현님을 위한 겉옷",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 구로구 디지털로300",
        buyer_postcode: "01181",
        // 모바일의 경우, 결제창이 뜨는 게 아니라 결제 사이트로 넘어가서 주소가 바뀌어버린다.
        m_redirect_url: "http://localhost:3000/28-01-payment",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          // const paymentDate = new Date(); 프론트엔드에서 시간을 만드는 것은 하지말자!

          // 백엔드에 결제 관련 데이터 넘겨주기 => 즉, createPayment 뮤테이션 요청하기
          // createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다! 다시 시도해 주세요.");
        }
      }
    );
  };
  return (
    <>
      <Head>
        {/* jQuery */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* iamport.payment.js */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
};

export default Payment;
