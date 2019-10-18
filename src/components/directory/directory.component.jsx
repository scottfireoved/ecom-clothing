import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'performance',
          imageUrl: 'http://www.armoredworks.com/metalcloak/images/2018-Website/Category-Pages/JK/Bumpers/JK-Bumpers.png',
          id: 1,
          action: 'shop now',
          linkUrl: 'shop/performance'
        },
        {
          title: 'accessories',
          imageUrl: 'https://cdn3.volusion.com/sxegw.zwlry/v/vspfiles/photos/40333-2.jpg',
          id: 2,
          action: 'shop now',
          linkUrl: 'shop/accessories'
        },
        {
          title: 'tires',
          imageUrl: 'https://www.cjponyparts.com/pub/media/images/resource-center/articles/body/wrangler-fuel-off-road-wheels.jpg',
          id: 3,
          action: 'shop now',
          linkUrl: 'shop/tires'
        },
        {
          title: 'releases',
          imageUrl: 'https://www.quadratec.com/sites/default/files/styles/product_zoomed/public/product_images/bestop_rhino_rack_for_sunrider_with_hardtop_for_jk_4dr.jpg',
          size: 'large',
          id: 4,
          action: 'shop now',
          linkUrl: 'shop/releases'
        },
        {
          title: 'forums',
          imageUrl: 'https://bloximages.newyork1.vip.townnews.com/tylerpaper.com/content/tncms/assets/v3/editorial/4/a7/4a790cf8-ea77-11e7-a198-4b6072ecc983/5a42aaf1e1de7.image.jpg?resize=1200%2C800',
          size: 'large',
          id: 5,
          action: 'join now',
          linkUrl: 'shop/forums'
        }
      ]
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    );
  }
}

export default Directory;