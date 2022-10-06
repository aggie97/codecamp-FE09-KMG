function useQuery(aaa) {
  // apollo useQuery 예시?

  // aaa 를 통해서 BackEnd에 API Request

  return {
    data: {
      fetchBoards: { writer: "누구누구" },
    },
    loading: false,
    refetch: () => {
      console.log("refetch run!!");
    },
    // 등등...
  };
}
