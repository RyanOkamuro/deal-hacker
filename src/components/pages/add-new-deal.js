import React from "react";

import "./add-new-deal.css";

export default class AddNewDeal extends React.Component {
    render() {
        return (
            <form className="new-deal-form">
                <fieldset name="add-new-deal">
                    <legend>Add New Deal</legend>
                        <label htmlFor="js-deal-name" className="new-deal-name">Item Name</label>
                        <input placeholder="Playstation 4" type="text" name="js-deal-name" id="js-deal-name" required/>
                        <label htmlFor="js-deal-price" className="new-deal-price">Price</label>
                        <input placeholder="$200" type="text" name="js-deal-price" id="js-deal-price" required/>
                        <label htmlFor="js-deal-image" className="new-deal-image">Image URL</label>
                        <input placeholder="https://www.image.com" type="text" name="js-deal-image" id="js-deal-image" required/>
                        <label htmlFor="js-deal-seller" className="new-deal-seller">Seller</label>
                        <input placeholder="Walmart" type="text" name="js-deal-seller" id="js-deal-seller" required/>
                        <label htmlFor="js-deal-product-description" className="new-deal-product-description">Product Description</label>
                        <textarea name="js-deal-product-description" rows="15" required/>
                        <label htmlFor="js-deal-link" className="new-deal-link">Deal URL</label>
                        <input placeholder="https://www.walmart.com" type="text" name="js-deal-link" id="js-deal-link" required/>
                        <button type="submit" className="js-add-new-deal">Submit</button>
                </fieldset>
            </form>
        );
    }
}