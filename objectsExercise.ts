// 다음 두 변수가 올바르게 입력되도록 Movie 유형 별칭을 작성합니다.
// "originalTitle"은 선택 사항이고 "title"은 읽기 전용인지 확인합니다.

type Movie = {
  readonly title: string;
  originalTitle?: string
  director: string
  releaseYear: number
  boxOffice: {budget: number, grossUS: number, grossWorldwide: number}
}

const dune: Movie = {
  title: "Dune",
  originalTitle: "Dune Part One",
  director: "Denis Villeneuve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};

const cats: Movie = {
  title: "Cats",
  director: "Tom Hooper",
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
};

// 단일 Movie 객체를 허용하는 getProfit이라는 함수를 작성하십시오.
// 영화의 전 세계 총수입에서 예산을 뺀 값을 반환해야 합니다.

// 첫 번째 방법 직접 객체 속성에 접근 작성
/*const getProfit = (budgetValue: Movie): number => {
  return budgetValue.boxOffice.grossWorldwide - budgetValue.boxOffice.budget
}*/

// 두 번째 방법 구조 분해 할당 작성
/*const getProfit = (movie: Movie): number => {
  const {budget, grossWorldwide} = movie.boxOffice
  return grossWorldwide - budget
}*/

// 세 번째 방법 중첩 구조 분해 할당과 매개 변수 기본값 작성
const getProfit = ({boxOffice: {budget, grossWorldwide}}:Movie): number => {
  return grossWorldwide - budget
}
console.log(getProfit(dune))
console.log(getProfit(cats))
// For example...
// getProfit(cats) => -21166652
