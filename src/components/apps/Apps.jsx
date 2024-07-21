import React from 'react';
import styles from './Apps.module.scss';

const Apps = ({ theme }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerdiv}>
        <svg
          width='71'
          height='71'
          viewBox='0 0 71 71'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <circle
            className={theme == 'dark' ? styles.darkcircle : ''}
            cx='35.5'
            cy='35.5'
            r='31.5'
            fill='url(#pattern0_1_128)'
          />
          <defs>
            <pattern
              id='pattern0_1_128'
              patternContentUnits='objectBoundingBox'
              width='1'
              height='1'
            >
              <use
                xlinkHref='#image0_1_128'
                transform='translate(-0.367303 -0.00180573) scale(0.00584795)'
              />
            </pattern>
            <image
              id='image0_1_128'
              width='296'
              height='171'
              xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASgAAACrCAMAAADiivHpAAAA9lBMVEX////u7u7WujLt7e3+2j7s7Oz39/f09PTx8fH5+fn8/PwAAAD51j/VuSTt7fHh1Z/+2DHl0YL5557UuB784Xj9+/f/7rHVuCrUuDHbx2vu8PbT09PjznKNjY3m5ub+2jn+2CvGxsZkZGSWlpZXV1fixDX88czc3NzX19fKy8qEhIS6uro7PDvt7OPewDT9+vL59eXn4cTvzjrl3LLn15UODw5JSUk1NjWioqIlJiatrq0pKil2dnbStQDawEzbxFvl1Y/93lv18df844Tm3bnl2qrr5tPk0X785ZD98cL83mf73E/69NP76anbwVL989z98cUZGhrxWjD6AAAT40lEQVR4nO2di1ebPhvHiawEiEVdpyiurdbOatW1/tR6nTo33eY2N///f+ZNwi2UACFQWn2Xc3bOYunDw6e5PN/cUBSaDECSatKMqdKM4X7kZjQ3Qy8D0M3oNKO7Geh+5GY015ygbZ45nTUHc5mbjKvKP1CzA0oVA+V+hwWl+qDodbUscyZ4oaAs1jYwmYcBBmtOY81B1pzOmgOZ5matRHHrSuzuqsUtAjXWdo0159rmVj2VfZjplqis6qGxGf/uKnt3lb27Sh554VOj0vTpyEr8TeOuqqGrIq2EYtCkQZoiGc3NCWbiFrSj+lylqXGopXuX6KrAk3PAqyx4FbDgI5WpxgNfY8rfL7tiUENpVxWgpmLAVUW0KmeU0Eh76jXPg4pB1QfSrqZhmDwopVpOc3PLLxXUdcVFqoCr0wV1Uyko+3qioFSa/FCGZvxQpkYyPiia8VtIN+NHRjTjt5DUgnf3b5V2e/aamKsqz9Xok6vMk0P3OsWkydBJAl4G0IzhfuZmNJpR3Msgk9F1NwOZjKnR/zu3VYBaDUB9c6RdTXlyL6MkltCikTmWMAuVlqj6sZXH1bwBp3cFyAFKWOvdN6SeeHX+TZ700Qd1r0u7Ol1RDL5WAsr/WuMIzBgo0aoH7ioB5TdSjV/xqjc1URy9e6ooxmlYBaj5oETdpZSoDFcF2iiTaft1g+kCoxnNvc7NQDcD4xk9Ym4g15jnBBWUqCGUd5Xt/LlPnhJHQTaa0Oj/A6UpFkcBKU6yoOwDxlU1r6sshmgc5RKaaGTuXFcA6r/ge3oBV1MwVCBhHDkNIwnq2nm5oNYqAPXBq3r2zQsGJadhJEGtTRaUaGMuozQlNUw+UB89UPVbK9FVVVAUpzXm7GCxbjCDxZEM1Ezyf5OTgSZzmZfxzJlyo+Y5QXnfqi+YepJ3Jse7qKtZTx5MMbDjzLkiczW5otaUbamIMx8o/1v1I2FX47MwmZOrfprQTLGohrHD5INqiyQCKog3t2duAlT87kOxqnf9PkhPPqjP77LT5zcRBTNzoERFsaqIaRh7yQkSaf4JqMXfSnZ6u8gE5vVhJaAyRLFALxq5u2duWazifXNqXgIBqLcCoL60mRJVHxRxNRODD8r9rslm2An9vHf3zYmBWrJ8UFYuUO8wqP+CoeDlYq7GMEQXgLhxVK1wHBVRmjV/pYLzJBKaS4P6zICyr60irmZPLkhVZdFwV0zDyIIyf2JQH3wjN04hVzMxlFSVE0AtTRLU8jwLas0p5Goyhgq0HnCENIwsqMEiE5jjrvMFgxITe7KghhssqOMJg8oQxYA7wimqNMXmYWRB/dpgFcyCFXHVByUviiN9mqpok0yGkIaRBbXNgmp8NSb6KN49vaFlN2OqbC+qAga8mwlKaGIw4ZsTmoeRBbWy2GamFu7GXAUgq4xEXWUwBBWVKX8+KBCryqUsnx5MFhQr9Yaztyo4x92X7XARhTSo5cEyL5kkMA+l3mD2QImLYrFFd1mgfi8mj7IECsYu+puWA0pKQJG7iyy6ywJFqlhSCqVeYVf5GMAYKFYfmaw+GlNvrDKkLWTNv3uNbSEDcyIaphAo38ZTtqtqxNXauKsJTx4RxaJxVBDF0YwPnrU3Fpw4S/XibVQaKGYORsDVrJniiCge6yNLrspjpd86FgjNi4Dy52CIginmahYGUVByukBIwxQC5dmoHzsFXU3EUIXWA9b9hKueb4Mut3vBoMChQMRZCiiyYWiioOKNOcjZmKcpTfAwWVBhYH4I1GKujgseMNaYc/YTpew74mTSt18dVAXqobCr6RgUBvyYKObGUXmVpojYKwIq0MSD7DKSLYqjTx6Je3xQIFaVS9pTnM2pCKhQwSwXd3W6m68FNEwRUIGRElydqigW2ThUBqjrWQSV6+7fJgrKUzCr9k1VoPKIYoEWMjQnoGEKgArnYAJXVWlXU6dLlchybM7abNHl2AZrgVnqLaBh8oNqtxcX6R+D5XbHjoCrZrqrqU8u0erk2+cgsOhOGFQbA9rY2Ficf3z3feUHGbfzTZA5mMKupmMQrcqyuuBrGaBICcKAfj6+e7uy/WdAbzyITFYdWcVdnarWE9EwmaDeYEA/toeDZYVJZFaPVTAvHZSAhpGbhYnO6j1UDErlXCF0d/6pCwRU8arHTyvscrvGQQmupmPI1/bn7/Vg8TgqGVSgYBpluMrfi+X3ej74HHEUf8Q+SWleZ87syYH6vjg2ByMZ8mUNB1R20Fa2hpEE1WbmYK5LcXW6J5Jlaxg5UI9tdsPQKwCVvXGoBFDfZhJUvjg+W8NIgaILOEMFUxko+segMWeviPSiagQUyWWeNnU/IVDzb9gjD+KuggxXuXthaiyoCIaUMXPBAXQjY1Q6ex5GCtTyGzbevJf1TvjJ8+2XklGa2RpGClRE6jUOrTJcTdmLNXkJI6BhhEGZw+3g/38WYwrmZWu9kkCZf358f2xvLAZ/oJo4VDA5StSsgrIKNubmYPv3l89kGAp3cz8DUEQThwqmNtUSJSOK43d3MhcfJIJavlshxQgjansjd58DUCssKFsvxdVSShSbiW5CyviZsg8/4IFqv/v97icuRj4iD9RjCCoi9ZxSXM3GUGDFXbbSzNQwPFBv2otRRuOgyKbGcMOQhKs1jqtpK+5Y8JM5fTpTw3BBcdPil8Dj7yyo98pyKa5O95juBbZE8UpXDlBhX/jI7KzCCuY1gGIPcLt+qjdirHKA+h4BFR55UJKrUxXF7OEH9przcPR+tVG3JUGFQQPZ/ekbqB9VB0ow0s8Qxdwe+i4CqqZa4HDhBhcs2z8aMgeoFd/hZXKNb7axnfmbxl3Ne2riRLck0TSMgsJJtfSDr0vXfsESBdVe3PjhgxpEFMzd5J8iSw2mHNMtWlEPYqAIEeCAh4W1OQLLXnIyQWFI8+9+DE0WlK9g7MaBqiYUZzlRzKsqolVZXsLAOgeUB+vg8Pap0fiWVqLmCaTFd7//RKY/70Kpt+pNVr10radqcwmgaCW09If7e0tNAkUgPb7dHihj6c8GszjKLsnV6YIC2lMSKLcgqSD8YxQUpvTzexwSSX834grmhYNStfd2YokaT6yE2Zj/8mPIg0TSjw0mMH+qAlRknrDkY7pdGaXdSoBqf15xIUVapjBRqec35u+dwq4mP3lk29hYpOVmDJZ1gSjODBfdiYPKGgomUi8IzG/NklzlYBjfrxe5otzI3LyfBKg2e+SBvzA8j6t+wBkBlRJwSoDK+zOFhx+UB4qVevZCIqgXJYrNcMLKvnEcEgqoRUGZjxGpN6Og8q74jExYfbs/cBzVKghK+ckqmIfSCn82KOlIX2CEPTIPY9cb17eHwFG5BUsI1PLf72/YnfyNh+w2StDVlDZqkrOrfmZ8iLPeaNzcDx0gAWrw9+3PDXfpdAhKz+eq1Kx35hR9siiOvBAqCE4iP6rq2p6LJ7v+ae7264Fj5QBl/nr7GUPyh9KDwPxTia4yGIKTXd3yJ1qVi4S7CQe42bhgLTw4liUC6u7t4+LGIjvfwCy3ex1aDyrvE+dhbLth4+bdAmmgzOHKl/mN2PYF5siD1wIqbcJqldTCm+NDixQsK3685ODvl59MfWNSqGA8v18+qMyNQ7grnHt//2BZDpmyCUANtr9/3uDN70VBLVVSolJEsZpDaabuaBY7rbtB4oawRN1hSBsJjGgKzoY4LuFE8ZRjuiPvrsrckVTk1RhQ+LRuu0GudIdZNnjVLQLK+1L9vjxXOU/uZZTEElr8mO4g3BU5/IBJgsd0+5fXv1oyruadhfEfJgeo3LpA5PADeVCNw9fy5muRjUNFQD0kl6iXJYoByPdGATFQ7IahGRXFuZed6fneeiIGKgjM62qJriaDijT3+Xo94b1YMN8bh3KCmsu7S1iu10uOo/gna1Lwuc6+hmIHuEmDui7PVV4EWehEsrzhrtAh1PlAzYfHTpcpIpIxiIIqdHeRA9xygJr/70O4CbC+NGFQFWo9QQ0jBmr+w8fIOmOsYF4PqOyNQyKg2rgofZxbHVuOTZbbTVcUZ7WQOY75yvcyUD4oWt84a9YbR6W6SkHxGvOyxsxTzy97aGQfCZgKCtc3n9K4pcahJnfGWM4xc7+EMr9C9HzqQsd0e6X/4FPDtoVZjYHC9W11lVeWSLIbnx4A11WQ4WryMd1hRWUw+KBArCqXp/VUoNeObuc+1QWDBBbUfx/sZEj1hr10pJYqSxMxVAMKAMtRhgs3jfja6URQbdq/pUCq3yzcmZZeqqvlgsovin1zg+1bu5FZsFbd+pZ8XgIZOb7dJguClsse6CgKqtBaGraHVpyHhbW6CysJxCrt3/if2mSSa23hwHuN5SRd5R/THWnMI71orhcZZPfQKnCc2uHtNamFiUUrERKdj685FuA2uMXfuTDmKtuYu9eVu+KOv8GpxtjWnIf7NXdRvnCq1+fW7h8cnoqFhV2l5mq8Jy/07qp4Rc2vNC0HkLXTdZGwwcb17fr4q0WK0hRcpbZFQU1CF1iKMjx6P5fVvOOme+logJu3Kbo6XVCe7cPjazspbsCd5NPxw7Lgr/5aQfnmHHBw9G2uMa6cySzfElnxErE9LVBuD5AoigHbj5V89jXzMBbuCu+On+yweceU1u6HKm6Vwt4/Zk7QVSlRPH5M9+T3JQkliP8ZBilY9bpNogBclIhknZmksOD5h1Uni2LB4IQ159oOD8hhizNZzOXofxbWbo6GUCc6NjLSkWyO+5otqTgq+uSsqz4oEKvKVegCN8Mzp1tqaA7mMjc7Wq8SUKy5lwqqeMz3ekGV/EIorm2dtQ1Z2xN6JY4UqOInafDfXRXaTpZbmavYoLTQ5Dfmia6aybYzwUd+VO6BJ26GtxdLz7DNM1fgtdtRV824bVFXYdw2kGt1ktcyJLdo3LszD+Ob0yGEumeOV7Mm6Op0RbEKW5u7u+u7ey3WdqK53lbnqrkXBnFjtnVoTM7Vae8p3uwghJ47PRFQW6i/d4bQWQIoff2ka8Zd1UpydeqieBOhlhm/e9zcGdo0dFhDTYUPCjaxpbir63kO2ioCqrxNSPENJuTuLYQgjNuOmiP/Q+cUx1lHYc2FCkVvdZpxV7t9WJqriRjY6VDTm1A14xl3QtXdxkSWhjETqpzMmDmzh5CKLej6mDkT28IZ34K5jk4Vkmn1FXofak7XsTnTJOZwln6D2NZ1zztcXZsG/Yy1DT1XYS5XORgk312VHJykKE2wjlDPa1paEP94/m3JmIFOflTNJKVfx1W0x9jG10FiRAOYnQ5dezjwAVDr1UjbQLwDZh+dcVwt/u6qqk8kM3AT7IHqdREa9fTe+elo/3lH2XzeP33ehObeKUJXxFwNoVMY2Nb1s3PcDVwoYLN5cla7RF2ltXeFevrOWRe3ZVcIne9peu/0BD2fnp+V42oihkpBXaGdVheNcJiEH5J8bweNWrA3GtV2zlETfwluUTCubb313Nnp4b8o6yPcDz7jj5QLTK6lk260c95snuA/w53NK3S1s157RaA6aI+26zu6riK0rpDMLlRpP7aLLslXtCaJJPZI9dDB8xUthbuKYe6jkwvzYhdbJqB0c+T2iyOS0/poqzRXZwLUxTNUTG0fbeoqLlxX+KOzffxhp0tsoRPaCxm7+OFRB4OCfVzJsDPEttZFVwa1TUGpOL9LPsHUL3RYKai4NOQOLWc15vyZYqYxV9bPCShzByH8h9M9bAOST/YIKPdGe7iSdUygokvNF8Wwi4FQcxCDwtEMbqPoJ/uoD0NQUi8iFNyLFX2LB2cTEsxaji2yKh2HBwD330btYtS5xJXO1MxTdGHsIIV0/Fi2XHZOEPTMGfqIVMwdtK94tjVcay8UYg7Hogjgb3TRHnHP7BBGTRweCK0cT3E188nl9kvlFcW4iujY3BXqrONCgFsnqJ+hkdKn3Xqrg/ot3FJhC/i3xIGKjmmc4VbrOTRHQNFMy+0FMCjiq0ZLFgYlE3CKjkhWKWEoKHiF+obugSKRQI8+s0LKlt6ioLp71LbWwaBwKdxxdTC2nQTqEmm5Qc2y1qMSBpyT+uKD0q7QPhUqABPTPVBbI2rOIG21QuIm7BDcaSWBwgEqiSWaKJeEmWVQ6+gES5MR6upG7wTtYZGgkih8jxpDRIFc4EYa4ib9AvsAW7h5UhT8p846qJ2hnkHAuKMHGBSgoM4MqLWeSdeJJcypCWtTBCUjipNGD7CG0/GTX+53yZhLC5vTzpF7Vxw6jZ6vLnGcbWIMzfXW5vNli9ju4ytP0Mk6bO3hSzZJEVrHf+vvEFCou9XHQSoxgPvU0agDy3GVYuCJYnYTkp+hW65wiXKbe5rRaAa4lxlMxjTdjMFkvK4kMKecoT5uv7WL/f0zRe1eAWJb22p6d906HW0am6db+GnWry6fz0cXkPZMymbndH+rBuFev7nV7G/ifrPZb+JEer2r/f2tnkYtKBeX5CuirupprrpPrjNP7mPwwScNsRc/ptuo4cZ5F/jmsMAF0dPTvE+wWlbDAUxq2rurOwTgFRgcVZE4apdx1X+Kwq5O95huA66jvhask4jbhozt7CPEiKuaH3DO3LxeoYO2NjEngQlQwJpzI7qkCdDXCUrpbGqptvPPFBsvA1TeyS2op9vODaqHe8EuUcxTABXpRaXfXRXtoblHMHNsBzPFjDnOEU6BOdjvdjqd7lm6qyDDVe4BEfneXaUJ7JdK38YkZU7YNhk3Vkw6HF6dq2mimP1RJ/JCqNgsTGiOndfjV1SyFjH71PkXdEy3wGJXzsMkzRT/f68K/gfqH6h/oP6BSgD1P7HnAY0yC25xAAAAAElFTkSuQmCC'
            />
          </defs>
        </svg>
        <button
          className={`${styles.name} ${
            theme == 'dark' ? styles.divdark : styles.divligth
          } `}
        >
          Javascript
        </button>
      </div>

      <div className={styles.innerdiv}>
        <svg
          width='71'
          height='71'
          viewBox='0 0 71 71'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <circle
            className={theme == 'dark' ? styles.darkcircle : ''}
            cx='35.5'
            cy='35.5'
            r='31.5'
            fill='url(#pattern0_1_132)'
          />
          <defs>
            <pattern
              id='pattern0_1_132'
              patternContentUnits='objectBoundingBox'
              width='1'
              height='1'
            >
              <use xlinkHref='#image0_1_132' transform='scale(0.00444444)' />
            </pattern>
            <image
              id='image0_1_132'
              width='225'
              height='225'
              xlinkHref='data:image/png;base64,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'
            />
          </defs>
        </svg>

        <button
          className={`${styles.name} ${theme == 'dark' ? styles.divdark : ''} `}
        >
          React
        </button>
      </div>

      <div className={styles.innerdiv}>
        <svg
          width='79'
          height='79'
          viewBox='0 0 79 79'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <g filter='url(#filter0_d_1_136)'>
            <circle
              cx='39.5'
              cy='35.5'
              r='27.5'
              fill='url(#pattern0_1_136)'
              shapeRendering='crispEdges'
            />
            <circle
              cx='39.5'
              cy='35.5'
              r='31.5'
              shapeRendering='crispEdges'
              className={theme == 'dark' ? styles.darkcircle : ''}
            />
          </g>
          <defs>
            <filter
              id='filter0_d_1_136'
              x='0'
              y='0'
              width='79'
              height='79'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_1_136'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_1_136'
                result='shape'
              />
            </filter>
            <pattern
              id='pattern0_1_136'
              patternContentUnits='objectBoundingBox'
              width='1'
              height='1'
            >
              <use
                xlinkHref='#image0_1_136'
                transform='translate(0 -0.0298165) scale(0.00458716)'
              />
            </pattern>
            <image
              id='image0_1_136'
              width='218'
              height='231'
              xlinkHref='data:image/png;base64,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'
            />
          </defs>
        </svg>

        <button
          className={`${styles.name} ${
            theme == 'dark' ? styles.divdark : styles.divligth
          } `}
        >
          Angular js
        </button>
      </div>

      <div className={styles.innerdiv}>
        <svg
          width='71'
          height='71'
          viewBox='0 0 71 71'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <circle
            cx='35.5'
            cy='35.5'
            r='31.5'
            fill='url(#pattern0_1_140)'
            className={theme == 'dark' ? styles.darkcircle : ''}
          />
          <defs>
            <pattern
              id='pattern0_1_140'
              patternContentUnits='objectBoundingBox'
              width='1'
              height='1'
            >
              <use
                xlinkHref='#image0_1_140'
                transform='translate(-0.00328736 -0.0170675) scale(0.00444444)'
              />
            </pattern>
            <image
              id='image0_1_140'
              width='225'
              height='225'
              xlinkHref='data:image/png;base64,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'
            />
          </defs>
        </svg>
        <button
          className={`${styles.name} ${
            theme == 'dark' ? styles.divdark : styles.divligth
          } `}
        >
          Vue js
        </button>
      </div>
    </div>
  );
};

export default Apps;
