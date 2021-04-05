import Head from 'next/head';
import Layout from '../../components/layout';

export default function accountCreate(){
    return (
        <Layout>
            <Head>Account Page</Head>
            <form className="position-fixed bottom-0 row g-3 container mb-5 pb-5" method="post" action="../api/account/user">
                <div className="mb-3 col-md-6">
                    <label htmlFor="inputFirstName" className="form-label">名字</label>
                    <input type="text" className="form-control" name="first"/>
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="inputLastName" className="form-label">名前</label>
                    <input type="text" className="form-control" name="last"/>
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="inputUniversity" className="form-label">大学名</label>
                    <input type="text" className="form-control" name="university"/>
                </div>
                <div className="mb-3 col-md-3">
                    <label htmlFor="inputYear" className="form-label">学年</label>
                    <input type="number" className="form-control" name="year"/>
                </div>
                <div className="mb-3 col-3">
                    <label htmlFor="inputPrefecture" className="form-label">都道府県</label>
                    <input type="text" className="form-control" name="prefecture"/>
                </div>
                <div className="mb-3 col-12">
                    <label htmlFor="inputEmail" className="form-label">メールアドレス</label>
                    <input type="email" className="form-control" name="email"/>
                </div>
                <div className="mb-3 col-12">
                    <label htmlFor="inputPassword" className="form-label">パスワード</label>
                    <input type="password" className="form-control" name="password"/>
                </div>
                
                <button type="submit" className="btn btn-primary">アカウント作成</button>
                
            </form>
        </Layout>
    )
}