import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h1 className="section-title">페이지를 찾을 수 없습니다.</h1>
      <p className="section-description">
        요청하신 페이지가 존재하지 않습니다. 홈으로 이동해 주세요.
      </p>
      <Link className="card-link" href="/">
        홈으로 돌아가기 →
      </Link>
    </div>
  );
}
