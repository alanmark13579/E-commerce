import { useEffect, useState } from "react";
import { productDetail } from '../api/productApi';

const useProductForm = (productId) => {
  const [thumbnails, setThumbnails] = useState([]);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      if (!productId) return;
      const res = await productDetail(productId);
      const thumbUrls = res.map(img => img.imageUrl);
      setThumbnails(thumbUrls);

      const primary = res.find(img => img.isPrimary) || res[0];
      setMainImage(primary?.imageUrl || "");
    };
    fetch();
  }, [productId]);

  const handleAddToCart = () => {
    console.log(`加入購物車：${productId}`);
  };

  const handleThumbnailClick = (index) => {
    setMainImage(thumbnails[index]);
  };

  return {
    mainImage,
    thumbnails,
    handleAddToCart,
    handleThumbnailClick
  };
};

export default useProductForm;
