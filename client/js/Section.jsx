import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Section extends React.Component {
  toggleCategoryView(e) {
    const $ct = $(e.currentTarget);

    if ($ct.hasClass('collapsed')) {
      $ct.removeClass('collapsed');
      $ct.siblings().removeClass('show');
    } else {
      $ct.addClass('collapsed');
      $ct.siblings().addClass('show');
    }
  }

  render() {
    return (
      <div className="category">
        <div className="categoryTitle" onClick={this.toggleCategoryView}>
          {this.props.category}
        </div>
        <div className="subCtg">
          {this.props.subCtg.map(sub =>
            <div key={sub}>
              <Link to={`/${sub}`}>
                {sub}
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Section;
