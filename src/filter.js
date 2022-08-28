import { useState } from 'react';
import productApi from './productApi';

const Filter = () => {
    const [Items, setItems] = useState(productApi);
    const categoryArr = [...new Set(Items.map(currentElement => currentElement.category))]
    console.log(categoryArr);
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
                            <button className="tab-button is-checked" data-filter="All">
                                Hair Care
                            </button>
                        </li>
                        <li>
                            <button className="tab-button" data-filter="#color">COLOR</button>
                        </li>
                        <li>
                            <button className="tab-button" data-filter="#treatments">TREATMENTS</button>
                        </li>
                    </ul>
                    <div className="category-tab-grid tab-content">
                        <div className="is-active tab-content--section" id="All">
                            {
                                Items.map((currentElement) => {
                                    const { id, name, image, category, price, sprice } = currentElement;
                                    return (

                                        <div className="category-tab-grid-item All">
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

                        {
                            categoryArr.map((currentElement) => {
                                console.log('hello' + Items.currentElement);
                                return (
                                    <div className={`tab-content--section ${currentElement} `} id={currentElement}>
                                        {
                                            [...new Set(Items.filter(currentElem => currentElem.category == currentElement))].map((mapCat) => {
                                                const { id, name, category, image, price, sprice } = mapCat;
                                                return (
                                                    <div className={`category-tab-grid-item ${category} `}>
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
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Filter;