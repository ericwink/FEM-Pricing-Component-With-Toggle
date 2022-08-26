import { useState } from "react"

export default function PricingPage() {
    const [pricing, setPricing] = useState(true)

    return (
        <main className="container">
            <section className="header flex flex-col">
                <h1>Our Pricing</h1>
                <div className="flex gap">
                    <p>Annually</p>
                    <label htmlFor="checkbox" className="switch">
                        <input onClick={() => setPricing(!pricing)} type="checkbox" id='checkbox' defaultChecked />
                        <span className="slider round"></span>
                    </label>
                    <p>Monthly</p>
                </div>

            </section>
            <section className="card-container flex">
                <article className="pricing-card flex flex-col">
                    <h2>Basic</h2>
                    {pricing ? <p>$19.99</p> : <p>$199.99</p>}
                    <ul role='list'>
                        <li>500 GB Storage</li>
                        <li>2 Users Allowed</li>
                        <li>Send up to 3 GB</li>
                    </ul>
                    <button>LEARN MORE</button>
                </article>
                <article className="pricing-card flex flex-col featured">
                    <h2>Professional</h2>
                    {pricing ? <p>$24.99</p> : <p>$249.99</p>}
                    <ul role='list'>
                        <li>1 TB Storage</li>
                        <li>5 Users Allowed</li>
                        <li>Send up to 10 GB</li>
                    </ul>
                    <button>LEARN MORE</button>
                </article>
                <article className="pricing-card flex flex-col">
                    <h2>Master</h2>
                    {pricing ? <p>$39.99</p> : <p>$399.99</p>}
                    <ul role='list'>
                        <li>2 TB Storage</li>
                        <li>10 Users Allowed</li>
                        <li>Send up to 20 GB</li>
                    </ul>
                    <button>LEARN MORE</button>
                </article>
            </section>
        </main>
    )
}