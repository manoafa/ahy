import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>AHY</h4> */}
      <svg 
        id="svg" 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        width="200" 
        height="100" 
        viewBox="0, 0, 400,200">
          <g id="svgg">
            <path 
              id="path1" 
              d="M153.875 25.956 C 154.402 25.990,155.265 25.990,155.792 25.956 C 156.319 25.923,155.887 25.896,154.833 25.896 C 153.779 25.896,153.348 25.923,153.875 25.956 " 
              stroke="none" fill="#e8d45c" fill-rule="evenodd">
            </path>
            <path 
              id="path2" 
              d="M153.875 25.956 C 154.402 25.990,155.265 25.990,155.792 25.956 C 156.319 25.923,155.887 25.896,154.833 25.896 C 153.779 25.896,153.348 25.923,153.875 25.956 " 
              stroke="none" fill="#e8d45c" fill-rule="evenodd">
            </path>
            <path 
              id="path3" 
              d="M153.875 25.956 C 154.402 25.990,155.265 25.990,155.792 25.956 C 156.319 25.923,155.887 25.896,154.833 25.896 C 153.779 25.896,153.348 25.923,153.875 25.956 " 
              stroke="none" fill="#e8d45c" fill-rule="evenodd">
            </path>
            <path 
              id="path4" 
              d="M153.875 25.956 C 154.402 25.990,155.265 25.990,155.792 25.956 C 156.319 25.923,155.887 25.896,154.833 25.896 C 153.779 25.896,153.348 25.923,153.875 25.956 " 
              stroke="none" fill="#e8d45c" fill-rule="evenodd">
            </path>
            <path 
              id="path0" 
              d="M222.987 27.958 C 222.980 29.127,222.952 30.196,222.925 30.333 C 222.899 30.471,222.830 30.958,222.773 31.417 C 222.529 33.384,221.627 37.362,221.337 37.750 C 221.269 37.842,221.159 38.139,221.094 38.411 C 221.029 38.683,220.841 39.208,220.676 39.578 C 220.511 39.947,220.166 40.737,219.908 41.333 C 219.651 41.929,219.359 42.529,219.260 42.667 C 219.161 42.804,218.936 43.179,218.761 43.500 C 218.585 43.821,218.254 44.383,218.026 44.750 C 217.797 45.117,217.623 45.435,217.638 45.458 C 217.654 45.481,217.551 45.631,217.409 45.792 C 217.267 45.952,216.733 46.640,216.222 47.320 C 214.988 48.963,215.134 48.795,213.333 50.655 C 212.463 51.555,211.262 52.682,210.667 53.159 C 210.071 53.636,209.459 54.126,209.308 54.248 C 208.823 54.637,207.165 55.667,207.023 55.667 C 206.947 55.667,206.749 55.817,206.583 56.000 C 206.417 56.183,206.221 56.333,206.146 56.333 C 206.072 56.333,205.417 56.623,204.691 56.978 C 202.594 58.003,199.206 59.169,197.583 59.424 C 197.217 59.482,196.785 59.565,196.625 59.609 C 196.353 59.684,196.333 59.417,196.333 55.678 L 196.333 51.667 190.250 51.667 L 184.167 51.667 184.167 55.833 C 184.167 58.125,184.136 60.000,184.098 60.000 C 183.921 60.000,180.323 59.118,179.584 58.893 C 177.391 58.227,172.059 55.717,171.667 55.167 C 171.621 55.103,171.409 54.958,171.195 54.845 C 170.982 54.733,170.682 54.538,170.528 54.411 C 170.375 54.285,169.762 53.799,169.167 53.332 C 167.700 52.180,164.436 48.945,163.702 47.917 C 163.637 47.825,163.358 47.450,163.083 47.083 C 159.701 42.573,157.910 38.206,156.905 32.022 C 156.851 31.689,156.768 30.198,156.720 28.708 L 156.632 26.000 154.820 26.000 L 153.008 26.000 153.083 26.458 C 153.124 26.710,153.238 27.967,153.337 29.250 C 153.479 31.099,153.892 33.674,154.406 35.917 C 154.914 38.136,156.787 43.080,157.231 43.372 C 157.333 43.440,157.359 43.496,157.289 43.497 C 157.105 43.501,158.554 46.233,159.044 46.805 C 159.175 46.958,159.332 47.196,159.391 47.333 C 159.451 47.471,159.762 47.921,160.082 48.333 C 160.403 48.746,160.848 49.346,161.072 49.667 C 162.265 51.378,167.566 56.500,168.144 56.500 C 168.239 56.500,168.377 56.598,168.450 56.717 C 168.592 56.948,170.881 58.500,171.080 58.500 C 171.145 58.500,171.408 58.649,171.665 58.832 C 172.315 59.295,175.279 60.750,176.083 61.002 C 176.450 61.116,176.825 61.265,176.917 61.332 C 177.156 61.508,180.314 62.427,182.135 62.851 C 183.867 63.255,184.290 63.519,184.365 64.250 L 184.417 64.750 171.458 64.793 C 164.331 64.816,158.500 64.868,158.500 64.907 C 158.500 65.020,159.524 66.887,159.739 67.167 C 159.845 67.304,160.040 67.642,160.174 67.917 C 160.307 68.192,160.454 68.454,160.500 68.500 C 160.595 68.595,160.779 68.907,161.776 70.667 C 162.166 71.354,162.545 71.992,162.617 72.083 C 162.690 72.175,162.920 72.587,163.127 73.000 C 163.334 73.412,163.644 73.975,163.817 74.250 C 163.989 74.525,164.837 75.987,165.700 77.500 C 166.564 79.012,167.379 80.438,167.511 80.667 C 167.642 80.896,167.792 81.121,167.844 81.167 C 167.896 81.212,168.454 82.188,169.083 83.333 C 169.713 84.479,170.270 85.454,170.322 85.500 C 170.430 85.595,170.841 86.314,171.275 87.167 C 171.439 87.487,171.637 87.825,171.716 87.917 C 171.795 88.008,172.322 88.895,172.888 89.888 C 174.149 92.101,174.669 93.011,175.018 93.617 C 175.165 93.874,175.647 94.721,176.088 95.500 C 176.530 96.279,176.934 96.954,176.987 97.000 C 177.040 97.046,177.216 97.346,177.379 97.667 C 177.541 97.987,177.854 98.550,178.075 98.917 C 178.296 99.283,178.621 99.846,178.796 100.167 C 179.426 101.317,181.233 104.436,181.838 105.417 C 182.178 105.967,182.704 106.867,183.008 107.417 C 183.312 107.967,183.629 108.463,183.712 108.519 C 183.794 108.575,183.844 108.650,183.823 108.685 C 183.782 108.753,184.235 109.615,184.907 110.750 C 185.124 111.117,185.411 111.604,185.543 111.833 C 186.434 113.371,187.088 114.497,187.382 115.000 C 187.569 115.321,187.863 115.846,188.035 116.167 C 188.207 116.487,188.526 117.050,188.746 117.417 C 188.965 117.783,189.298 118.359,189.487 118.697 C 189.996 119.611,190.085 119.593,190.673 118.458 C 190.970 117.885,191.283 117.371,191.370 117.315 C 191.457 117.259,191.533 117.146,191.538 117.065 C 191.544 116.983,191.728 116.632,191.948 116.283 C 192.168 115.935,192.437 115.447,192.546 115.200 C 192.654 114.952,192.786 114.712,192.837 114.667 C 192.932 114.583,194.859 111.223,194.984 110.926 C 195.020 110.837,195.118 110.687,195.201 110.591 C 195.284 110.495,196.004 109.270,196.801 107.868 C 197.598 106.467,198.459 104.967,198.714 104.535 C 198.969 104.103,199.306 103.487,199.464 103.167 C 199.621 102.846,199.797 102.546,199.854 102.500 C 199.911 102.454,200.504 101.442,201.172 100.250 C 201.839 99.058,202.617 97.718,202.901 97.271 C 203.185 96.824,203.392 96.420,203.361 96.373 C 203.330 96.326,203.374 96.241,203.458 96.185 C 203.543 96.129,203.838 95.671,204.115 95.167 C 204.392 94.662,204.778 93.987,204.974 93.667 C 205.170 93.346,205.383 92.971,205.447 92.833 C 205.511 92.696,205.795 92.208,206.078 91.750 C 206.362 91.292,206.701 90.692,206.832 90.417 C 206.964 90.142,207.197 89.729,207.350 89.500 C 207.683 89.002,208.817 87.064,210.960 83.333 C 211.829 81.821,212.678 80.358,212.848 80.083 C 213.018 79.808,213.299 79.321,213.472 79.000 C 214.201 77.648,216.566 73.538,216.924 73.000 C 217.137 72.679,217.560 71.958,217.864 71.397 C 218.168 70.836,218.799 69.711,219.266 68.897 C 219.732 68.083,220.257 67.154,220.432 66.833 C 220.607 66.513,220.791 66.213,220.841 66.167 C 220.891 66.121,221.094 65.802,221.293 65.458 L 221.655 64.833 209.078 64.833 L 196.500 64.833 196.500 63.917 C 196.500 63.413,196.556 62.998,196.625 62.996 C 196.727 62.992,198.844 62.508,199.833 62.262 C 200.452 62.108,202.433 61.444,202.583 61.340 C 202.675 61.276,203.125 61.086,203.583 60.918 C 204.485 60.587,207.906 58.853,208.635 58.357 C 208.882 58.189,209.421 57.834,209.833 57.568 C 210.687 57.016,210.613 57.069,211.827 56.136 C 213.352 54.964,213.521 54.812,215.417 52.917 C 217.460 50.874,217.987 50.283,218.681 49.254 C 218.943 48.866,219.272 48.453,219.412 48.337 C 219.552 48.221,219.667 48.047,219.667 47.951 C 219.667 47.855,219.791 47.639,219.944 47.470 C 220.243 47.139,220.374 46.931,220.981 45.814 C 221.199 45.412,221.431 45.046,221.495 45.000 C 222.178 44.512,224.907 37.387,225.261 35.167 C 225.297 34.938,225.398 34.410,225.485 33.994 C 225.768 32.642,226.029 28.449,225.912 27.125 L 225.799 25.833 224.399 25.833 L 223.000 25.833 222.987 27.958 M138.667 121.286 C 138.529 121.337,138.029 121.522,137.555 121.697 C 136.554 122.065,135.528 122.967,135.028 123.917 C 134.616 124.701,133.667 126.802,133.667 126.931 C 133.667 127.011,133.252 127.965,132.587 129.417 C 132.460 129.692,131.818 131.154,131.158 132.667 C 130.498 134.179,129.827 135.717,129.666 136.083 C 129.506 136.450,128.983 137.650,128.505 138.750 C 128.026 139.850,127.500 141.050,127.334 141.417 C 126.951 142.264,126.658 142.940,125.993 144.500 C 125.700 145.188,125.320 146.069,125.147 146.458 C 124.975 146.848,124.692 147.485,124.520 147.875 C 123.694 149.739,123.167 150.981,123.167 151.061 C 123.167 151.109,122.909 151.697,122.595 152.366 C 122.008 153.616,120.202 157.703,118.670 161.250 C 118.195 162.350,117.671 163.550,117.505 163.917 C 115.854 167.581,115.998 169.007,118.018 168.996 C 119.201 168.990,119.524 168.590,120.738 165.621 C 121.047 164.867,121.757 163.240,122.316 162.005 C 122.876 160.770,123.333 159.696,123.333 159.620 C 123.333 159.543,123.633 158.861,124.000 158.103 C 124.367 157.345,124.667 156.665,124.667 156.592 C 124.667 156.518,124.891 156.017,125.165 155.478 C 125.439 154.939,125.653 154.480,125.642 154.457 C 125.630 154.435,125.773 154.079,125.960 153.667 C 126.146 153.254,126.501 152.429,126.748 151.833 C 126.996 151.237,127.405 150.300,127.657 149.750 C 128.559 147.786,129.026 146.714,129.074 146.500 C 129.084 146.454,129.334 145.910,129.629 145.291 C 129.925 144.672,130.167 144.124,130.167 144.074 C 130.167 144.023,130.318 143.649,130.504 143.241 C 131.039 142.066,131.222 141.593,131.194 141.458 C 131.179 141.390,131.242 141.333,131.333 141.333 C 131.425 141.333,131.500 141.239,131.500 141.124 C 131.500 141.009,131.914 139.977,132.421 138.832 C 132.928 137.687,133.407 136.600,133.486 136.417 C 133.566 136.233,133.864 135.574,134.149 134.951 C 134.434 134.328,134.667 133.780,134.667 133.732 C 134.667 133.685,134.861 133.219,135.098 132.698 C 136.569 129.462,136.833 128.859,136.833 128.735 C 136.833 128.630,137.093 128.045,137.939 126.250 C 138.874 124.263,140.621 124.304,141.540 126.333 C 141.726 126.746,142.056 127.472,142.273 127.948 C 142.489 128.424,142.667 128.855,142.667 128.906 C 142.667 128.987,143.169 130.131,143.915 131.750 C 144.495 133.010,145.167 134.656,145.167 134.820 C 145.167 134.919,145.242 135.000,145.333 135.000 C 145.425 135.000,145.481 135.058,145.458 135.130 C 145.421 135.244,146.124 136.985,146.987 138.917 C 147.151 139.283,147.458 139.996,147.669 140.500 C 148.251 141.887,148.586 142.655,149.066 143.700 C 149.456 144.549,149.839 145.436,149.917 145.667 C 149.960 145.797,150.265 146.496,150.735 147.546 C 150.973 148.076,151.167 148.582,151.167 148.671 C 151.167 148.774,148.292 148.833,143.336 148.833 L 135.505 148.833 134.988 149.295 C 134.346 149.869,134.231 151.094,134.765 151.683 C 135.510 152.507,135.429 152.500,144.389 152.500 L 152.795 152.500 153.047 153.042 C 153.185 153.340,153.461 153.958,153.661 154.417 C 153.861 154.875,154.140 155.512,154.282 155.833 C 154.424 156.154,154.649 156.679,154.782 157.000 C 154.916 157.321,155.126 157.808,155.251 158.083 C 155.375 158.358,155.865 159.483,156.341 160.583 C 156.816 161.683,157.303 162.808,157.423 163.083 C 157.543 163.358,157.877 164.146,158.164 164.833 C 159.359 167.690,159.561 168.104,159.968 168.542 C 161.452 170.134,163.566 168.240,162.669 166.122 C 162.101 164.780,160.831 161.850,160.393 160.870 C 160.177 160.387,160.000 159.932,160.000 159.860 C 160.000 159.788,159.823 159.359,159.607 158.906 C 159.194 158.042,159.001 157.604,158.250 155.833 C 157.729 154.606,157.308 153.645,156.731 152.370 C 156.512 151.886,156.333 151.446,156.333 151.393 C 156.333 151.339,156.063 150.722,155.732 150.022 C 155.402 149.323,155.037 148.487,154.920 148.167 C 154.804 147.846,154.550 147.227,154.355 146.792 C 153.501 144.885,153.333 144.500,153.333 144.439 C 153.333 144.404,153.132 143.934,152.887 143.396 C 152.641 142.857,152.428 142.379,152.414 142.333 C 152.354 142.138,151.923 141.127,151.135 139.333 C 150.003 136.759,149.759 136.186,149.497 135.500 C 149.374 135.179,149.175 134.769,149.054 134.588 C 148.932 134.407,148.833 134.169,148.833 134.060 C 148.833 133.950,148.507 133.161,148.107 132.305 C 147.471 130.943,147.186 130.300,147.084 130.000 C 147.001 129.756,146.639 128.873,146.504 128.583 C 146.418 128.400,145.889 127.212,145.327 125.944 C 143.897 122.714,143.283 122.040,141.191 121.405 C 140.418 121.171,139.139 121.110,138.667 121.286 M170.406 121.678 L 169.917 122.189 169.869 144.636 C 169.819 168.099,169.826 168.370,170.520 168.590 C 170.692 168.644,170.833 168.759,170.833 168.845 C 170.833 169.492,172.890 168.828,173.309 168.046 C 173.590 167.521,173.582 122.696,173.301 122.079 C 172.838 121.063,171.211 120.838,170.406 121.678 M209.240 121.678 L 208.750 122.188 208.705 132.761 L 208.659 143.333 195.288 143.337 C 182.871 143.340,181.891 143.361,181.561 143.629 C 180.576 144.427,180.611 145.793,181.640 146.625 C 181.841 146.788,184.822 146.833,195.282 146.833 L 208.667 146.833 208.667 157.156 C 208.667 167.851,208.682 168.098,209.377 168.678 C 210.218 169.379,211.771 168.959,212.164 167.923 C 212.407 167.285,212.397 122.899,212.154 122.203 C 211.756 121.062,210.113 120.766,209.240 121.678 M220.083 121.368 C 219.075 121.946,218.951 123.492,219.839 124.393 C 220.033 124.589,220.692 125.393,221.304 126.178 C 221.916 126.964,222.642 127.895,222.917 128.247 C 223.192 128.599,223.679 129.199,224.000 129.580 C 224.321 129.961,224.771 130.524,225.000 130.831 C 225.229 131.138,226.167 132.310,227.083 133.435 C 228.000 134.560,229.454 136.385,230.314 137.490 C 231.175 138.596,232.046 139.681,232.250 139.901 C 232.454 140.121,232.800 140.552,233.017 140.857 C 233.235 141.163,233.580 141.601,233.784 141.831 C 233.989 142.062,234.631 142.857,235.211 143.599 C 235.792 144.341,236.507 145.203,236.800 145.515 C 237.092 145.828,237.332 146.139,237.333 146.206 C 237.333 146.274,237.745 146.814,238.247 147.406 L 239.161 148.484 239.169 157.899 C 239.175 164.116,239.238 167.488,239.355 167.824 C 239.816 169.146,241.564 169.397,242.542 168.282 C 242.812 167.973,242.833 167.249,242.833 158.234 C 242.833 149.054,242.850 148.507,243.135 148.301 C 243.300 148.181,243.674 147.734,243.966 147.306 C 244.257 146.879,244.556 146.504,244.630 146.473 C 244.704 146.442,244.986 146.117,245.257 145.751 C 245.528 145.385,246.237 144.482,246.833 143.744 C 247.429 143.006,248.142 142.113,248.417 141.759 C 249.000 141.007,250.450 139.199,251.216 138.267 C 251.510 137.910,251.820 137.498,251.905 137.351 C 251.990 137.204,252.149 137.008,252.258 136.917 C 252.367 136.825,253.189 135.813,254.083 134.667 C 254.978 133.521,255.827 132.490,255.970 132.375 C 256.113 132.260,256.160 132.166,256.074 132.164 C 255.987 132.163,256.001 132.106,256.103 132.039 C 256.206 131.972,256.677 131.429,257.150 130.833 C 257.623 130.237,258.103 129.637,258.215 129.500 C 259.093 128.429,262.334 124.311,262.630 123.891 C 263.778 122.261,261.650 120.310,260.064 121.539 C 259.528 121.955,259.400 122.105,257.763 124.238 C 257.129 125.065,256.468 125.893,256.294 126.079 C 256.121 126.265,255.669 126.829,255.290 127.333 C 254.911 127.837,254.522 128.325,254.426 128.417 C 254.329 128.508,253.913 129.033,253.500 129.583 C 253.088 130.133,252.702 130.621,252.642 130.667 C 252.582 130.712,251.698 131.800,250.678 133.083 C 249.657 134.367,248.642 135.642,248.422 135.917 C 248.201 136.192,247.793 136.717,247.514 137.083 C 247.236 137.450,246.902 137.862,246.772 138.000 C 246.642 138.137,245.850 139.112,245.012 140.167 C 244.173 141.221,243.396 142.197,243.285 142.336 C 243.174 142.474,242.787 142.980,242.424 143.461 C 242.061 143.941,241.705 144.333,241.632 144.333 C 241.560 144.333,241.500 144.438,241.500 144.566 C 241.500 144.884,240.967 145.066,240.816 144.798 C 240.750 144.680,239.790 143.458,238.684 142.083 C 237.578 140.708,236.613 139.508,236.540 139.417 C 236.467 139.325,236.009 138.762,235.524 138.167 C 235.038 137.571,234.552 136.971,234.445 136.833 C 233.310 135.379,229.502 130.589,229.041 130.038 C 228.714 129.646,228.290 129.120,228.098 128.868 C 227.907 128.616,227.622 128.262,227.466 128.080 C 227.310 127.899,226.650 127.075,226.000 126.250 C 225.350 125.425,224.690 124.600,224.534 124.417 C 224.378 124.233,224.031 123.783,223.764 123.417 C 223.224 122.675,222.780 122.154,222.184 121.563 C 221.741 121.123,220.682 121.025,220.083 121.368 "
              stroke="none" fill="#e4d45c" fill-rule="evenodd">
            </path>
            <path 
              id="path1" 
              d="M153.875 25.956 C 154.402 25.990,155.265 25.990,155.792 25.956 C 156.319 25.923,155.887 25.896,154.833 25.896 C 153.779 25.896,153.348 25.923,153.875 25.956 " 
              stroke="none" fill="#e8d45c" fill-rule="evenodd">
            </path>
            <path 
              id="path2" 
              d="M153.875 25.956 C 154.402 25.990,155.265 25.990,155.792 25.956 C 156.319 25.923,155.887 25.896,154.833 25.896 C 153.779 25.896,153.348 25.923,153.875 25.956 " 
              stroke="none" fill="#e8d45c" fill-rule="evenodd">
            </path>
            <path 
              id="path3" 
              d="M153.875 25.956 C 154.402 25.990,155.265 25.990,155.792 25.956 C 156.319 25.923,155.887 25.896,154.833 25.896 C 153.779 25.896,153.348 25.923,153.875 25.956 " 
              stroke="none" fill="#e8d45c" fill-rule="evenodd">
            </path>
            <path 
              id="path4" 
              d="M153.875 25.956 C 154.402 25.990,155.265 25.990,155.792 25.956 C 156.319 25.923,155.887 25.896,154.833 25.896 C 153.779 25.896,153.348 25.923,153.875 25.956 " 
              stroke="none" fill="#e8d45c" fill-rule="evenodd">
            </path>
          </g>
        </svg>
      {/* <svg
        width={127}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 127.67 23.36"
      >
        <path
          fill="currentColor"
          d="M14.14,11.84a38.37,38.37,0,0,0-3.26-2.05C9.73,9.13,8.81,8.57,8.13,8.1a7.8,7.8,0,0,1-1.7-1.64,3.62,3.62,0,0,1-.67-2.14,3.63,3.63,0,0,1,.9-2.53A2.78,2.78,0,0,1,8.8.8a4.35,4.35,0,0,1,2.59.8,6.86,6.86,0,0,1,1.92,2A9.35,9.35,0,0,1,14.56,6.4h1.28V.32H15s-.26.17-.64.45a6,6,0,0,0-1.12,1.31,6.94,6.94,0,0,0-1.41-1A7.39,7.39,0,0,0,8.16,0,10.81,10.81,0,0,0,3.84.77a6,6,0,0,0-2.66,2A4.89,4.89,0,0,0,.32,5.6a6.37,6.37,0,0,0,.93,3.46,8.87,8.87,0,0,0,2.24,2.4A33.75,33.75,0,0,0,6.91,13.6c1.11.64,2,1.17,2.59,1.6A6.56,6.56,0,0,1,11,16.67a3,3,0,0,1,.64,1.89,3.9,3.9,0,0,1-1.09,2.91,3.9,3.9,0,0,1-2.91,1.09,6,6,0,0,1-5.06-2.78A10.34,10.34,0,0,1,1.28,17H0V23H.8s.26-.17.64-.45a5.37,5.37,0,0,0,1.12-1.31,5.83,5.83,0,0,0,1.5,1.06,9.23,9.23,0,0,0,4.26,1,12.56,12.56,0,0,0,4.83-.83,6.72,6.72,0,0,0,3-2.24,5.68,5.68,0,0,0,.13-6.21A8.1,8.1,0,0,0,14.14,11.84Z"
        />
        <path
          fill="currentColor"
          d="M33.43,1l2.4,1L31,12.64,26.23,3.2a5.17,5.17,0,0,0-1.66-2,4.51,4.51,0,0,0-2.66-.7h-4V1l1.6.48,6.56,13.12v7.36l-1.92.48v.48h9.12V22.4l-1.92-.48V14.24L37,1.92l2.56-1V.48H33.43Z"
        />
        <path
          fill="currentColor"
          d="M49,.48H40.79V1l1.92.48V21.92l-1.92.48v.48H49q5.73,0,8.77-2.94t3.07-8.26q0-5.31-3.07-8.26T49,.48Zm4.61,19.2A5.25,5.25,0,0,1,49,22.08H48V1.28h1a5.23,5.23,0,0,1,4.61,2.43q1.63,2.4,1.63,8T53.56,19.68Z"
        />
        <path
          fill="currentColor"
          d="M78.87,1l2.56,1v12.8l-10.24-12a8.07,8.07,0,0,0-1.83-1.63A4.88,4.88,0,0,0,66.71.48H63.35V1l2.24.64V21.44L63,22.4v.48h6.08V22.4l-2.56-1V5.92L81.43,23.36h1V1.92L85,1V.48H78.87Z"
        />
        <path
          fill="currentColor"
          d="M102.79,18.34a7.14,7.14,0,0,0-1,3.74H94.24V12.16h3.68a7.19,7.19,0,0,0,.83,2.27,7.82,7.82,0,0,0,.61.93h1V8.16h-1a7.82,7.82,0,0,0-.61.93,7.19,7.19,0,0,0-.83,2.27H94.24V1.28h6.88a7.14,7.14,0,0,0,1,3.74,4.66,4.66,0,0,0,1,1.22h1V.48H87V1L89,1.44V21.92L87,22.4v.48H104.8V17.12h-1A4.66,4.66,0,0,0,102.79,18.34Z"
        />
        <path
          fill="currentColor"
          d="M121.59.48V1l2.4,1-4.87,10.72L114.39,3.2a5.11,5.11,0,0,0-1.67-2,4.47,4.47,0,0,0-2.65-.7h-4V1l1.6.48,6.56,13.12v7.36l-1.92.48v.48h9.12V22.4l-1.92-.48V14.24l5.6-12.32,2.56-1V.48Z"
        />
      </svg> */}      
    </div>
  );
};

export default Brand;
