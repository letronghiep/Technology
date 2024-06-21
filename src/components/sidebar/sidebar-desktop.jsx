/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarDesktop = ({ categories }) => {
  const [parentCategories, setParentCategories] = useState([]);
  const [menuIndex, setMenuIndex] = useState(null);

  useEffect(() => {
    if (categories) {
      setParentCategories(categories.filter(item => item.parentCategory === null));
    }
  }, [categories]);

  const itemProps = {
    onClick: () => setMenuIndex(null),
  };
  const handleButtonKeyDown = (event, index) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setMenuIndex(index);
    }
  };

  const handleMenuButtonMouseEnter = (index) => {
    setMenuIndex(index);
  };

  const handleMenuButtonMouseLeave = (index) => {
    setTimeout(() => {
      setMenuIndex((latestIndex) => {
        if (index === latestIndex) {
          return null;
        }
        return latestIndex;
      });
    }, 1000);
  };

  const isOnButtonRef = useRef(false);

  const handleMenuMouseLeave = (index) => {
    isOnButtonRef.current = false;
    setTimeout(() => {
      setMenuIndex((latestIndex) => {
        if (index === latestIndex) {
          return null;
        }
        return latestIndex;
      });
    }, 200);
  };

  const handleMenuClick = () => {
    isOnButtonRef.current = true;
  };

  return (
    <div
      style={{
        borderRadius: 'md',
        backgroundColor: 'white',
        height: '100%',
        fontSize: '14px',
      }}
    >
      <ul
        style={{
          fontSize: '12px',
          borderRadius: 'md',
          padding: '0px',
          backgroundColor: 'white',
          maxHeight: '100%',
          listStyle: 'none',
        }}
      >
        {categories &&
          parentCategories.map((item, index) => (
            <li key={item._id} style={{ position: 'relative' }}>
              <Link
                to={`${item.slug}`}
                style={{
                  width: '100%',
                  display: 'block',
                  padding: '12px',
                  textDecoration: 'none',
                  color: 'black',
                  borderRadius: '4px',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={() => handleMenuButtonMouseEnter(index)}
                onMouseLeave={() => handleMenuButtonMouseLeave(index)}
                onKeyDown={(e) => handleButtonKeyDown(e, index)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>{item.category_name}</span>
                  <span style={{ fontSize: '12px', marginLeft: 'auto' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ height: '16px', width: '16px' }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 14l4-4H7.83L12 14z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
              {menuIndex === index && (
                <ul
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '100%',
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    padding: '8px 0',
                    width: '292px',
                    listStyle: 'none',
                    zIndex: '10',
                  }}
                  onMouseLeave={() => handleMenuMouseLeave(index)}
                  onClick={handleMenuClick}
                >
                  {categories
                    .filter((sub) => sub.parentCategory === item._id)
                    .map((o) => (
                      <li
                        key={o._id}
                        style={{
                          padding: '8px 16px',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s ease',
                        }}
                        {...itemProps}
                      >
                        <Link to={o.slug} style={{ textDecoration: 'none', color: 'black' }}>
                          {o.category_name}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SidebarDesktop;