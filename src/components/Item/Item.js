import React, { useState } from "react";
import { useTrail, animated as a } from "react-spring";
import "./Item.css";

const items = ["А ,", "Где", <svg className="svg" width="60" height="60" viewBox="0 0 83 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.6532 89C37.6792 89.0004 33.7794 88.1401 29.9828 86.4209C25.6043 84.4381 21.3987 82.0027 17.4834 79.1828C17.3122 79.0595 17.1509 78.9287 16.9984 78.7903L12.7866 82.1807C12.4945 82.4166 12.0856 82.4429 11.7655 82.2462C11.6197 82.1567 8.15646 80.016 5.22441 76.5925C2.28214 73.1575 0.992591 69.7839 0.939248 69.6424C0.822784 69.3335 0.886795 68.9851 1.10505 68.7385L3.69349 65.8104C3.75706 65.7388 3.82907 65.68 3.90641 65.6342C2.58308 63.0577 0.806782 58.2639 0.16623 50.3707C-0.400533 43.381 0.483616 37.6495 2.79378 33.335C2.91736 33.104 3.10006 32.7262 3.29787 32.3181C3.63659 31.6193 3.98643 30.8961 4.2278 30.5013C4.46562 30.1123 4.72433 29.6642 5.01149 29.1675C7.23942 25.311 11.3859 18.1335 20.8599 12.6636C28.8893 8.02829 32.8846 7.54628 36.4092 7.1208C38.506 6.86801 40.3161 6.64904 42.753 5.55774C48.9531 2.78233 50.1915 0.511167 50.2035 0.488468C50.3218 0.262376 50.5351 0.0896916 50.7827 0.0282729C51.029 -0.034036 51.2957 0.00646477 51.5055 0.151555C52.155 0.601069 55.3973 2.95813 55.4324 5.23596C55.4498 6.34016 55.067 7.09588 54.7874 7.64687C54.5007 8.21254 54.5109 8.2259 54.6318 8.38745C54.7616 8.56014 54.9981 8.65538 55.3733 8.79647C56.2686 9.13338 57.6212 9.64164 57.6839 12.2568C57.7341 14.3397 56.6357 15.5027 55.7418 16.3461C57.5088 17.2282 62.0398 19.6351 65.6337 22.7879C67.9554 24.8245 69.7762 27.2056 70.8955 28.8435C71.7489 30.0932 72.2633 30.9175 72.5571 31.4818C73.7022 30.8609 74.4805 30.5943 75.0855 30.3869C75.7954 30.1439 76.1866 30.0095 76.8009 29.4394C78.8444 27.543 82.1831 29.0335 82.5868 29.313C82.8148 29.4706 82.9628 29.7189 82.9931 29.9935C83.0495 30.5035 82.7584 30.8191 82.2294 31.3919C81.3497 32.3443 79.52 34.3262 78.6412 37.6891C77.854 40.7026 78.0184 44.2048 78.1634 47.294C78.2549 49.2447 78.3412 51.0868 78.1656 52.5431C77.5917 57.3035 76.3973 67.2101 69.0952 75.3535C65.6035 79.2478 61.2214 82.6494 56.6886 85.034C56.6095 85.0941 56.5215 85.1391 56.4286 85.1698C55.3102 85.7479 54.1842 86.2633 53.0609 86.7088C49.2091 88.2367 45.3978 89 41.6532 89ZM36.7711 86.7195C43.4135 87.9648 49.8808 86.4729 55.5178 83.6214C55.9085 82.8252 57.0394 80.161 56.9549 76.1328C56.8562 71.3857 56.0343 69.8863 56.0259 69.8721C55.7871 69.4515 55.9227 68.9081 56.3375 68.6597C56.7522 68.4109 57.2847 68.532 57.5417 68.9414C57.6519 69.1172 58.6227 70.8103 58.733 76.0954C58.7872 78.7173 58.3769 80.8135 57.9319 82.2893C61.7579 80.0004 65.1158 77.1266 67.7718 74.1652C69.1503 72.6279 70.2998 71.0199 71.2613 69.3932C70.9359 68.597 70.2034 66.2964 70.6012 62.4337C71.0644 57.935 71.2346 55.4818 71.2364 55.4578C71.2698 54.9673 71.7014 54.6019 72.1841 54.6309C72.6744 54.6643 73.0443 55.0893 73.01 55.5798C73.0083 55.6047 72.8362 58.0832 72.3699 62.6166C72.1663 64.5981 72.2886 66.1019 72.4753 67.1376C75.3176 61.3184 76.0092 55.5789 76.4008 52.3303C76.5582 51.0223 76.4755 49.2523 76.3879 47.3786C76.2368 44.1612 76.0657 40.5152 76.9218 37.2396C77.8371 33.7374 79.64 31.5908 80.6811 30.4488C79.853 30.2329 78.6848 30.1186 78.01 30.7457C77.1187 31.5726 76.4435 31.804 75.6616 32.0719C74.9224 32.3247 74.0031 32.6398 72.4033 33.6301C70.9266 34.5443 70.8915 35.7424 70.9564 37.6223C70.9999 38.8658 71.0484 40.2754 70.3229 41.5211C69.0543 43.6997 67.5096 43.199 66.4881 42.8701C65.9351 42.6912 65.4541 42.5354 64.9527 42.652C64.9056 43.0365 65.2341 44.1145 65.4781 44.9156C66.0391 46.7568 66.8068 49.2781 66.3912 51.823C66.1587 53.2445 65.7328 54.1142 65.0505 54.5597C64.2543 55.0804 63.4067 54.8628 62.7261 54.6865C61.8313 54.456 61.657 54.4769 61.4001 54.8503C60.4164 56.2754 60.1417 57.5763 59.7612 59.3766C59.6007 60.1354 59.4184 60.9957 59.1597 61.9633C58.7556 63.4747 57.98 64.5318 56.8535 65.105C55.1422 65.9764 52.6773 65.7365 49.0985 64.3502C46.082 63.1819 43.3362 62.9131 41.5643 62.8939C41.555 62.8939 41.5456 62.8939 41.5363 62.8939C40.7637 62.8939 40.0663 63.2553 39.299 63.8196C34.1666 68.7447 28.5146 71.5237 22.9447 71.776C21.8685 71.8246 20.735 71.7845 19.5873 71.6786C18.336 71.9932 17.5816 72.9617 17.2744 73.887C16.8917 75.0388 17.018 76.6553 18.5218 77.7377C22.342 80.4891 26.4444 82.8652 30.7158 84.799C32.0067 85.3834 33.2989 85.8507 34.5862 86.2103C35.1539 85.7813 37.7806 83.6953 40.2032 80.0965C40.016 79.6719 38.9221 77.1026 38.7896 74.827C38.7238 73.692 38.6856 72.2327 38.8759 71.7249L40.5401 72.3515C40.5401 72.3515 40.5512 72.3315 40.5637 72.2781C40.5588 72.2986 40.453 72.8019 40.565 74.7233C40.6344 75.9178 41.0353 77.2623 41.3709 78.2054C44.0736 73.5149 44.471 71.8437 44.4746 71.8268C44.5817 71.3515 45.0533 71.047 45.529 71.1485C46.0051 71.2504 46.3118 71.7128 46.2149 72.1904C46.1758 72.384 45.7446 74.2319 42.6903 79.4761C40.6188 83.0326 38.2109 85.4546 36.7711 86.7195ZM2.80756 69.4991C3.25964 70.5161 4.47273 72.9799 6.57486 75.434C8.67522 77.8868 11.1276 79.6755 12.1767 80.388L15.5039 77.7092C14.2855 76.7728 12.3301 75.2502 11.0823 74.1763C7.78307 71.3399 5.40667 68.0745 5.30709 67.9365C5.2662 67.88 5.2333 67.8203 5.20708 67.7594C5.10439 67.6232 4.97504 67.4434 4.82524 67.2168L2.80756 69.4991ZM8.72278 69.3162C9.65983 70.3799 10.8743 71.6514 12.2403 72.826C13.076 73.5447 14.2655 74.4918 15.3186 75.3143C15.2803 74.6609 15.3666 73.9885 15.5875 73.324C15.8475 72.5407 16.2658 71.8606 16.8006 71.3118C13.7374 70.7978 10.7938 69.9718 8.72278 69.3162ZM6.66555 66.7353C7.88308 67.1812 13.9352 69.3175 19.5037 69.8792C19.8509 69.8155 20.2123 69.7871 20.5799 69.7933C22.2975 69.8244 23.94 69.7025 25.4572 69.4252C31.0319 68.4051 34.6645 65.3498 36.8346 63.5241C37.2169 63.2019 37.5601 62.9144 37.8655 62.6745C37.9619 62.5988 38.0597 62.5236 38.1584 62.4493C39.6933 60.9655 41.1838 59.2764 42.6107 57.3934C48.2517 49.9488 47.9009 46.3887 47.7325 44.6784L47.7085 44.4296C47.6689 43.9872 47.4208 43.1856 47.1581 42.3378C46.4754 40.1329 45.5405 37.1136 46.4238 34.8856C47.239 32.8294 49.3154 32.6443 51.3228 32.4654C52.7626 32.3372 54.2518 32.2041 55.4124 31.4337C57.8995 29.7821 56.646 25.5326 55.5138 23.2828C55.0661 22.3936 54.5145 21.7247 54.0277 21.135C53.1934 20.1242 52.331 19.0788 52.7257 17.5024C52.9778 16.4952 53.6748 15.8445 54.3482 15.2152C55.2026 14.4167 55.9409 13.7269 55.9067 12.3005C55.8725 10.8865 55.4729 10.7365 54.7483 10.4637C54.2624 10.2812 53.6579 10.0538 53.2107 9.45739C52.4141 8.39636 52.8693 7.49822 53.2014 6.84219C53.4396 6.37221 53.6646 5.92803 53.6543 5.26444C53.6419 4.43084 52.3537 3.07963 51.1935 2.14188C50.2902 3.20113 48.1783 5.07974 43.4793 7.18356C40.7966 8.38434 38.7692 8.62912 36.6226 8.88815C33.2665 9.29316 29.4627 9.75202 21.7481 14.2058C12.6861 19.4375 8.84547 26.0858 6.55086 30.0589C6.2557 30.5694 5.98899 31.0305 5.74495 31.4306C5.54891 31.7515 5.18796 32.4965 4.89858 33.0947C4.68788 33.5291 4.49318 33.9305 4.3616 34.1767C2.37193 37.8912 1.5269 42.802 1.8434 48.7903C3.17429 44.3036 5.89208 37.6326 11.2717 31.4333C20.2896 21.0406 37.8103 15.3696 38.5518 15.1333C39.0212 14.9855 39.52 15.2437 39.6684 15.7119C39.8173 16.1801 39.5591 16.6808 39.0914 16.8299C38.923 16.8837 22.9963 22.0407 13.9614 31.1516C15.7124 31.7288 19.7784 32.8855 22.6056 32.238C23.7684 31.9723 24.7735 31.7199 25.6599 31.4969C27.854 30.945 29.4392 30.5463 31.3048 30.4737C31.3164 30.4728 31.3288 30.4728 31.3399 30.4728C31.8151 30.4728 32.2094 30.8489 32.2276 31.3282C32.2467 31.8196 31.8649 32.2335 31.3741 32.2522C29.773 32.315 28.3279 32.6621 26.3898 33.1486L28.122 34.8131C28.4763 35.154 28.4879 35.717 28.1483 36.0717C27.8073 36.4264 27.2455 36.438 26.8912 36.098L24.3499 33.6559C23.9253 33.7587 23.4764 33.8656 23.0003 33.9741C19.1321 34.8563 13.6845 32.9639 12.635 32.5766C12.6279 32.5847 12.6208 32.5931 12.6137 32.6011C9.72695 35.928 7.63371 39.4288 6.12501 42.624C8.49519 41.3328 12.3652 39.6665 14.8283 40.8976C16.4641 41.7147 17.7087 43.1852 18.9134 44.6072C20.2296 46.1618 21.4729 47.63 23.1021 48.1819C23.5671 48.3395 23.8164 48.8446 23.6591 49.3106C23.5017 49.7761 22.9981 50.0262 22.5318 49.8682C20.4359 49.1579 18.9725 47.4298 17.5572 45.7585C17.0433 45.1515 16.5419 44.5595 16.0258 44.0321C15.6528 45.1884 15.031 47.3759 15.011 49.1619C14.9825 51.705 16.2507 55.306 16.2632 55.3421C16.4276 55.8054 16.1863 56.3145 15.724 56.4792C15.2617 56.6448 14.7527 56.4027 14.5882 55.9394C14.5313 55.7805 13.2004 52.0054 13.2324 49.1424C13.2604 46.6286 14.2802 43.5964 14.5655 42.7962C14.3922 42.6836 14.2157 42.5817 14.0348 42.4909C11.8157 41.3836 6.72022 44.2248 5.10973 45.3081C5.04883 45.3491 4.98482 45.3816 4.91858 45.4056C2.91069 50.4718 2.42261 54.2285 2.41461 54.2944C2.41327 54.3029 2.41239 54.3109 2.41105 54.3193C3.63704 62.3763 6.08856 65.9804 6.66555 66.7353ZM41.8724 61.1181C43.7936 61.1648 46.6345 61.4866 49.7399 62.6892C52.7302 63.8477 54.8532 64.1259 56.0481 63.517C56.7144 63.1783 57.17 62.5192 57.4425 61.5022C57.6888 60.5809 57.8582 59.7811 58.0213 59.0081C58.4129 57.1566 58.7508 55.5575 59.9372 53.8387C60.9387 52.3869 62.3354 52.7474 63.1693 52.9628C63.5302 53.0554 63.9387 53.1613 64.0788 53.0687C64.1361 53.0313 64.4326 52.7812 64.6366 51.535C64.9856 49.4 64.3157 47.2014 63.7774 45.435C63.2782 43.7958 62.9172 42.6115 63.4098 41.7271C63.5618 41.4548 63.8658 41.0969 64.4539 40.9421C65.4768 40.6728 66.3405 40.9514 67.0348 41.1757C68.007 41.489 68.239 41.5656 68.7876 40.6238C69.2539 39.8227 69.2183 38.7839 69.1801 37.6842C69.1214 35.9916 69.0489 33.9123 71.0235 32.4204C70.3772 31.249 68.027 27.2555 64.4619 24.1271C60.7102 20.8354 55.7298 18.319 54.5212 17.7307C54.4918 17.7974 54.4678 17.8655 54.4505 17.935C54.2882 18.5834 54.5492 18.9706 55.3986 20.0005C55.9183 20.6298 56.5646 21.4136 57.102 22.4808C58.8361 25.927 59.6918 30.7279 56.3957 32.9171C54.859 33.9372 53.0645 34.097 51.4811 34.2385C49.5692 34.409 48.469 34.5536 48.077 35.5426C47.4249 37.1866 48.2525 39.8592 48.8566 41.8108C49.1607 42.7922 49.423 43.64 49.4799 44.2698L49.5021 44.503C49.6932 46.4399 50.0897 50.4691 44.0278 58.4695C43.3242 59.3971 42.6049 60.2805 41.8724 61.1181Z" fill="#DFE2EB"/>
</svg> , "?"];
const config = { mass: 5, tension: 2000, friction: 200 };

function Item() {
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 70 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });

  return (
 
    <div className="trails-main" onClick={() => set(state => !state)}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}
          >
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
      </div>
      
  );
}

export default Item;