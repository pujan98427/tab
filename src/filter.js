import { useState } from 'react';
import productApi from './productApi';

const Filter = () => {
    const [Items, setItems] = useState(productApi);
    const [isActive, setActive] = useState(false);
    const categoryArr = [...new Set(productApi.map(currentElement => currentElement.category))]


    const filterThis = (catItem) => {
        setActive(current => !current);
        const updateItems = productApi.filter((currentElem) => {
            const parsecategory = currentElem.category.split(" ").join("");

            return parsecategory === catItem
        })

        setItems(updateItems)


    }

    return (
        <section className="category-tab">
            <div className="container">
                <div className="section-header">
                    <span className="section-sub-title">BEAUTY</span>
                    <h2 className="section-title">
                        Natural Cosmetic Brand
                    </h2>
                </div>
                <div className="category-tab-wrapper tab-wrapper">
                    <ul className="tab-button-group" id="filters">
                        <li>
                            <button className='tab-button is-checked' data-filter="All" onClick={() => setItems(productApi)}>
                                All
                            </button>
                        </li>
                        {
                            categoryArr.map((currelement) => {
                                return (
                                    <li>

                                        <button className={`tab-button  ${isActive ? 'is-checked' : ''} `} data-filter={currelement} onClick={() => filterThis(currelement.split(" ").join(""))}>{currelement}</button>
                                    </li>
                                )
                            })
                        }

                    </ul>
                    <div className="category-tab-grid tab-content">
                        <div className="tab-content--section">
                            {
                                Items.map((currentElement) => {
                                    const { id, name, image, category, price, sprice } = currentElement;
                                    return (

                                        <div className={`category-tab-grid-item ${category.split(" ").join("")}`}>
                                            <div className="product-thumnail">
                                                <img alt="" src={image} />
                                            </div>
                                            <div className="product-detail">
                                                <div className="entry-meta">
                                                    <span className="category">
                                                        <a href="">
                                                            {category}</a>
                                                    </span>
                                                </div>
                                                <h2 className="product-title">
                                                    <a href="">{name}</a>
                                                </h2>

                                                <span class="product-price">
                                                    {
                                                        sprice ? <del>
                                                            <span class="shopify-Price-amount amount">
                                                                <bdi><span class="shopify-Price-currencySymbol">$</span>{price}</bdi></span>
                                                        </del>
                                                            : ''
                                                    }

                                                    <ins><span class="shopify-Price-amount amount"><bdi><span class="shopify-Price-currencySymbol">$</span>{sprice ? sprice : price}</bdi></span></ins>
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Filter;