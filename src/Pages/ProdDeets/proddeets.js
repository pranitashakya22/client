import ProdZoom from "../../Components/ProdZoom";
import { Rating } from "@mui/material";
import QuantityDrop from "../../Components/QuantityDrop";
import Button from "@mui/material/Button";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { useState } from "react";
import image from "../../images/img.webp";

const ProdDeets = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section className="prodDeets section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pl-5">
              <ProdZoom />
            </div>
            <div className="col-md-7 pl-5 pr-5">
              <h2 className="hd text-capitalize">Natural Herbal Tea of Nepal</h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-light mr-2">Brand:</span>
                    <span>Lipton</span>
                  </div>
                </li>
                <li className="list-inline-item ml-3">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      size="small"
                      readOnly
                    />
                    <span className="text-light cursor ml-2">1 Review</span>
                  </div>
                </li>
              </ul>

              <div className="d-flex info mb-3">
                <span className="oldPrice">$20.00</span>
                <span className="netPrice text-danger ml-2">$14.00</span>
              </div>
              <span className="badge bg-success">In Stock</span>
              <p className="mt-2">
                A refreshing blend of premium green tea leaves, handpicked from
                the pristine Himalayan region, offering a delicate, earthy
                flavor with subtle floral notes. Packed with antioxidants, it
                helps boost metabolism, support digestion, and promote
                relaxation. Sustainably harvested and free from artificial
                additives, this green tea ensures purity and quality in every
                sip.
              </p>

              <div className="d-flex align-items-center mt-4">
                <QuantityDrop />
                <Button className="btn-blue btn-lg btn-big btn-round ml-3">
                  <FaShoppingCart /> &nbsp; Add to Cart
                </Button>
              </div>
              <div className="d-flex align-items-center mt-4 actions">
                <Button className="btn-round btn-sml" variant="outlined">
                  <IoIosHeartEmpty /> &nbsp; Add to Wishlist
                </Button>
                <Button className="btn-round btn-sml ml-3" variant="outlined">
                  <MdOutlineCompareArrows /> &nbsp; Compare
                </Button>
              </div>
            </div>
          </div>

          <br />

           {/* Tabs Section */}
           <div className="card mt-5 p-4 prodDeetsTabs">
            <div className="customTabs">
              <ul className="list-inline d-flex justify-content-start">
                <li
                  className={`list-inline-item tab-btn ${activeTab === 0 ? "active" : ""}`}
                  onClick={() => setActiveTab(0)}
                >
                  <span className="icon">&#128196;</span> Description
                </li>
                <li
                  className={`list-inline-item tab-btn ${activeTab === 1 ? "active" : ""}`}
                  onClick={() => setActiveTab(1)}
                >
                  <span className="icon">&#128077;</span> Rating & Review
                </li>
              </ul>
            </div>

            <div className="tabContent mt-4">
              {activeTab === 0 && (
                <div>
                  <h4>Product Description</h4>
                  <p>
                    A refreshing blend of premium green tea leaves, handpicked from the pristine Himalayan region, offering a delicate, earthy flavor with subtle floral notes. Packed with antioxidants, it helps boost metabolism, support digestion, and promote relaxation.
                  </p>
                </div>
              )}

{activeTab === 1 && (
    <div className="ratingReviewSection">
      <h4 className="sectionTitle">Customer Rating</h4>
      <div className="ratingSummary d-flex align-items-center justify-content-between">
        <div className="avgRating text-center">
          <h1 className="ratingValue">0</h1>
          <Rating name="read-only" value={0} size="large" readOnly />
          <span className="ratingCount">0 Ratings</span>
        </div>
        <div className="ratingBreakdown ml-4">
          <ul className="list-unstyled">
            {[5, 4, 3, 2, 1].map((star) => (
              <li key={star} className="d-flex align-items-center">
                <span className="starLabel">{star} ★</span>
                <div className="progressBar ml-2">
                  <div
                    className="progressFill"
                    style={{ width: "0%", background: "#f0c040" }}
                  ></div>
                </div>
                <span className="count ml-2">0</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h4 className="sectionTitle mt-4">Customer Reviews</h4>
      <div className="reviewSection">
        <div className="userDeets d-flex">            
            <img src={image} className="w-25"/>
            <p className="text-align-center ml-4">Pranita Shakya</p>
        
          <Rating
             name="read-only"
             value={5}
             precision={0.5}
             size="small"
             readOnly
            />
    
            <p>
              The product was shipped in an excellent condition. I highly recommend you guys to try this tea. This tea has become my goto drink every morning. Thank you Nonabozzar. Would love to shop again.
            </p>
        </div>
        

        {/* <p className="noReviewsText">
          No reviews yet. <span className="highlight">Be the first to write a review!</span>
        </p> */}
      </div>
     </div>
      )}
     </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProdDeets;
