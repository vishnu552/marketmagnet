import React from "react";
import Care_health_insurance_logo from "../assets/assets/Care_health_insurance_logo.png";

function CompanyLogo() {
  const logos = [
    "https://ds0zssdpdgkzg.cloudfront.net/Logos/Logo_with_text.svg",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISBhUSEBAWFRUXFhIbFxYVGRceIBsZGhkiHRkXGhodICogHh4xHh0YJTElKCotLjAvICI0ODMtNygtLisBCgoKDg0OFRAQGy0lIB0rNysrLS0tLS0tLS0vKzc3LS0tLS0vLS0tLSs3Ny03LSstLS03LTcrLSstNy03LTctK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBBQgEAwL/xABHEAABAwIEAwUDBgoIBwAAAAABAAIDBBEFBhIhBzFBEyJRYYEycZEUI1KSobEIFTdicnOisrPRNkJTVILB0vAXJjN0g8Px/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAJBEBAQEBAAICAQQDAQAAAAAAAAECEQMSITFRBCIyQkGBwQX/2gAMAwEAAhEDEQA/ALxREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREGEuii+eK2SKnj7N5bdxvY26Kydef9V554PFryWd4r3jRhtdLmeN1NFUPjEDBeIPLdWt1/Z68lAfxHiv8Adqz6k38l0Jk3EC/DCZZLnWQC472sPFe2tx6KKvZG8izwe/fYG/I/zXabs+OOOP1Pi348+W3nf+ubJMMxSJhkdDWMDdy4tmFvO/RTvhdxJn/GjKSukMjJCGxyOPea4+y1zubgeVzvdXJX4hDDSGWaVjGDm55AHLlvzPkuW5HNmzmTSNs2SqvCALWDpO5t06LUvvL2PR/HnK6vWV+HvDWEuIAAJJPIDxKrDMPGemhqTHSwmosbF5dob/h2JP2LhM3X062yLSRVRgXGuCSqDKqndCCbdo12sD9IWBA911Mc55rbQZfFW2PtmudGAGvsCHgkODrG42S41Lyp7R5MQ4lYdFX9j2zpJNegtjY42dfTYk2HPzUwXIk+I6sddUabXmMmm/i/Vpur0yfxSFfiboRSGPTFJJftNXsdLaQum/FyfDOd9SfMmcqKgkDaqbS8t1Bga5xIuRfYeIK2GA4vHV4Syph1aJNWnULHZxbuPRc2cQM2fjPGGTiHstMTWadWq9nOde9h4qXZG4pilwinovkZfpOnX2gHtyE306fPxS+G+vZ9k38r1WV48UxGKmoXTTyBkbRdzj/vc+QVWYnxwjbUEU9G57R/Wkfpv/hAP3rnnF19N3Ui30Vd5P4r01ZWNhmYaeVxs3U4Oa4/R1bWPvC3+e80/i3BhUGHtbyNZp1aebXG97H6Ketl4dnOpKiqSDjfCaR7n0jmvGjQwPB1Xvcl2kaQLDx5qXcPM3PxPDpJnQCIMk0CztV+6Ceg8QlxqfZNSpaiIsqIiICIiDCjucMOlmgYIm6iCb7gdPNSJFXD9T4M+fxXx6+qrI5Zq/7E/WZ/Na+vwuaKdrJIyHO9kCxJ+CsfFsy0dLUCOpqY4nFocGvdY6b2v8QVq35xwk1IkNbBrAIDtXIHnZdcas/w+Nr/AMDwyft1f9ojxAyxWyZDjja10z2TNeWN3LGCNwsOrtyNh/kq64XYhDT52hdURhwJLGk/1Hu2a/8Ay9b9FetRxBwtkJca6I2HJpJJ9wC56aTW52vAwt7eqLmNH9UPkv8AYCumLbL2Pr48efHnOc/4XHx0xp0GWWQRuIM7yHEf2bBdw9SW+l1V2QKPC3SPkxWo0htgyIB/e8XOcwcvL/Zsrj3hLpMvw1DQT2Mjg63RsgA1fWa0eqrHImH4ZUTvjxGeSF23ZvDmhh8WuJabFPHz0b1/J7OIFHhAhZJhU/e1WfF85a1vbaXj7L9VMeF9LHimR5KGrLy2CZpbpNiGuBLRf361psWwLLlPUMYa2ok1HcwujeGDxcQz7rlWbw7y9RUtA+TD53TRzFl3FzXbsvtsBb2jsVnev2rmfLnepoGNzM6AX0CodHz309pp5+Nl0Nl7hxRUVaZYO11OY9h1PBGl3PpzXP8AjMnZ5ymc4HuVUhI90pXR+F52oKmuZDBUtfJIHFrQHcgLm+2xt05q+W65OGOKJ4qZZgw/H2Q02rS6FrzrNzqLnDw/NCnPD3hxRVGW6arl7XtXXcdLwBdshA2t5BaDj8P+bYv+2Z/EepVw4z1QU+R4Yp6gMkj1hzCHX3eXAiw3FiE1dek4TntUe4+Y092MxUjT3I2B7h4vde1/c0ftFa7JFFgIwoPxKo1zOveP54BgvsO4Nz159V6ePGGObmKOpG8c0TQHdNTOn1S0/FeHJOB4LVYaPldXJBO2+prnsa077OaXN5W6XVnPSJf5NBnWloY8XBwycyQuF7EPux1/Zu4C45EKwM9Ys6q4M0k7zd5mjDj4uYJGE+pbf1WrOC5cGL9h8tqOQ+duzs7/AEdej7eXmt/xQwiGk4WwQU7i+JtQwtcSDqD2yOvcbHmpbLcwk+0R4SZOhxHEpTU3McLWXa021OeTa5527pV75dwCChoTDTMLWF7n2JJ3IAO536BVd+Dt7db7qX/2K5lz81vtxvE+OsoiLk2IiICIiAiIgqvijw+q8Qx9k9O6INELWHW4g3DnHo0/SCh//BjEvpU/13f6FdmM5mo6SYMqqlkTnC4Dr7i9r/Ffemxqnkwk1MczXQgPJkHKzL6j6WK6zyakYuZaoxvBfEdW76ceet/+hWPw/wCG0WHSdtI/tqi1g61msB56B4+f3Le0Oc8Pmn0RVkTnWcbXts0XJudrALzM4hYWarsxXR6r2udQb9cjT9qXe78EmYkdVTskp3RyNDmOBDmnkQeYKpzMfBVxqS6gnaGk/wDTmv3fIOAN/UK3qyviioDNJIGxgXL+Yt47dFr8KzZRVNX2VPVRyPsTpaTew5lZzrWfpdSX7VPg3BKoNSDV1EbGdRFdzj5bgAe/dXLg+FxUuHMggYGRsFgPvJPUk816Z5mshc95Aa0EuJ5AAXJK0tBnKgnrGxQ1cb5HX0tbe5sL+HgCmta19kkiFZ+4T/K8VdU0krY3vN3skvpLurg4XIv4WWvyfwiqafG4qieqY3sntcBDqcTY8ruAAB9Va+JYnDT0/aVEzIm+L3AegvzK0dNxDwuSfQ2ujv8Anamj6zgB9qs3v15E9c9efiHkaPE6Rvf7OaO+h9rgg82uHO33KtYOCVaaiz6iBrergXk2/R0j71fDHgsBabg8iOq8GMY5TUsQdUzsiB5azYn3DmfRTO9T4i3MvzXgnypDLlVlDUkzMYxjQ92zrtFg8HoR/wDbqqcV4JVTag/JqiJ7OnaamuHvsCFaWHZ7w2eoDIq2MuNrB123PlqAutrjGMQUtMJKmZsTC4NDnci4gm3wB+CudazSyVVWWuDjYqlsmJVDHNBFooybOPQOe623kB6qbcRsqyV+XGU1O5kZbIxw1XADWtc2wsD4hUFBipdnKOWaZzmNqmO1vcTZgkBvv0suk8HzPR1dQY6apZK4N1ENvsLgX+JC35PaWVnPL8IzwsyRPhhqO3kjf2vY6ezLttGq97gfSCnyyi4223tbk4IiKKIiICIiAiIgon8IL+kNP+oP75Ukyd+QyX9RX/e9Rv8ACC/pDT/qD++VJMnfkMl/UV/3vXov8MuX9qpXA8LlqsVZTwC8khsN7DxJPkACfRSbOnDepw7DmzvkZIwuDXFl7tJ5XB6ea+nBf8oMP6M/8Mq2eM/5Ppv0oP4jVvW7NyJM/ttRjgpiRqsAqcPqCXMa3ug8+zkBa9o8gfvVc4FUvwvPjDJsYJyyTzZctf8AskqYfg+f0hqP1A/fC8/HfBOyzIypaO7Ozvfpx2B+LdP2qTk3c/k/rKsLjHjPyfJL2tPenIjH6J3efdpBHqoBwSw5raipxGYfN00TgDbqQXPI8wwftKLZuzU6tw2jiJPzEOl1+r721efcbH9qtqiy66n4MSQtFpX08kr/ABJcNRb79ADfRZs9c8/K97eqlxGvq8azUALufI4iOO/djZzt5ADclSHHeD9XT4Q6Zs0cpY0ufG0OBsOem/tfYoVluilnxlkNPKIpH3DXF5Zvb2dQ8eSnsvDfGhES6raGgEkmoksB1vsumrzkl4zPl7eBmapPl5w+V5cxzXOhufZc3dzB5EXPp5qAZwxKSqzZM+d5Hzr2i97MYHEAW8AFYeQeGlbS5pgqpHQmNheSWPJJBYQLbb81vM88MKesxN0lNO2GpeC90Z3a/wAX6R3m78zuFj2zN9a5fVE6vhH2mHslw2ujqbkar2aLfSDgT8OaleN5Fr6jh/BRSVEUk0UzXa3F9uzDHNDdVrkjV4clVuM5fxHB6tsji6K5syWF+xI3ttv6EK5uE+cJMRwd4nsZoS0OcNtTXA6XW5A7O+Cm/aTvek59OeoMPc/Fm04I1ulEYJ5ai7T8Lq8OF3D+qw7G5Jqh8TmuhLAI3OJvra7q0eBVRYabZ6jJ/vjP4wXVivm1eSGIyiIvM6iIiAiIgIiICIiClOOmFVE2PQGGnlkAhIJYxzgDrO2wUgynQSt4MSxOie2Qw1oEZa4OuS+w0891ZSLfv8SM+vz1z5wiwWpiz1E+WmmY0Nmu58bwPYPUiytDi5SyS5EmZFG57i6GzWAkn5wdApmiXfdSkzycUrwLwqeHHZzNTyxgwgAvY5oJ1jbcKccWMBNZk6QMaXSRESMAFydPtAdd2l23jZTJZS7t17EzyccxZMyZUz5ngjmpZWRawZHPje0aW94i5HW1vVdNuaC2x5LKJvd0ZzxQGfeF9RT4g6ahjdLATqDWbvjP0dPMjwI9VGparF6iH5M51ZK3l2ZEp+I6+q6lWFuea8+Ylx+FdcJ8p1lHh73Vcz2h7bMpw64Z+eegd7vXyrzNeS8Vo8bdUROnn7xLaiIuL7fn27wP2LohZWZ5LL1bmc45Zqo8Wr5mslbVTkeyHNeQD4+A96u/hXk9+HYK7trdtK5rngb6QB3WX62u74qbLKa8ls4kxz5c7cReH1VT43JNTxPlge9z2mMElhJuWuA3FjyK1DcbxoNAE1bb/wAq6gWFqeb45Yen4VPwYxCvlxKcVsk7miNmnttdr6t7albKwsrlq9vWpOCIiiiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//9k=",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAflBMVEX////7+/YAAAD///z+/vmhoZ/g4N2YmJfU1ND29vMODg2zs7Hx8eyZmZbb29fDw8B3d3VMTErMzMqMjIqoqKZlZWNAQD6EhIJeXlzm5uNqami9vbw1NTO1tbGurqzKyshGRkQcHBsvLy0nJyZ8fHs8PDtycnAoKCdYWFaQkI4owqMNAAAD8klEQVR4nO3cbVeiQBiA4aEZDc201DS17N1d//8fXExneBAESXHYuK9PK41o9ymaGTmrFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwIVp32+gSJ3eYFB7vgsJvlMU811ICAKjSzFNjmXCVhm37UvX8l1ICPTyqpSXdKyiH8ZfFOumXKxhKpZ+vs41Pq2W70LCGWKpx/xnPJ32V8R3IeEcsR7ynzEhFrGIlYtYJRCrBP4alnCWedatM7LDpvEx5lmJWo6a2WF99Stn8Kcvd2KmbYeF6WEmUtwmNcp3ISEw/VIL6dbsZ7G06rXDcNZRRnz/u6/Ej7aj2oESz/bTJdN5t2gOxVK91mR7/HGhjb7fmvQ2TxlMvh+8rpXu7EZ1V2Gcy3chQX5LnRx5iYpiGd0Sv8dPfWX/uYnlrpl3Sl4QXkP71nwXEsS3NMi7VPWP2sbKjGU6r8lzhW9Zsabr5Khr1cBYpvO+d663blasj/2XnKrmxdJfB0+aiJXWUk2LpaaHT1oQa/uivgsJVccy/ZyTFsW6V82KJReO08Fw0LrPizVfvgwXYl2+WS74LiRUHMu49c/VZzTVNEarML6S78V66Cm9GdF+d0dUk2LpsT2wti+lA3fFT8Ya2Ymo0U/2WKdJsdxe1338SvFPWyJW5ohoJeq7kFD1T5adf8rNikMzeDFitTvY0g2KFdjH8unFscxidzCamPouJFQcq7N7+CUXoUfEshOOVX1jdQ+6dCx7nnlNY+Xv1Rx3O0h66rB72JXbpUfEetkd/KxrLCtxr125e2bSF/g/Gb/GR1zg7RrpuqYXeNfqeRSb5u4iF8dyU4e5mBjozFiPYoT97b0a1DxWcuVb7qOZ9E+W2/Z7ti9l4s8Zk5PScTzCrZF6NZ1nuVju46wzxBLLnfFmLRMtZmZ/3aG95c70e0FkVOBqvtZ1uVNJrEDFaSbL/qx/MxcnTy2kR4PZLBQ7pgvdqFgmvDqsaIvmffPivgsJVccK1N3PYw1ru/lXUawgSG2uHxtrVN9t5apiiWt8bqzu/lcfavyBRVWxAj17S1Z4zv4obJ4cZWdmvgsJF4gVmGAlT3lzaAafqLWs9Yes1cWKztm3IT7WPaUyPze8Uyq0Ud/WHffOfBcSzhtrc/uRybpbJpppDhfj5aCtv1eb34O2Z5Zrw2hUGI1aRKPE+6mPjFiJ5U7rxLurRK/N3kXGzV3JhXTUcG+U70JCxjcV3gjH7WOdIHPXQfJdSMh4d6b8PtYJ/vNYl0WsEohVArFKIFYJ7m7pFbGO0Ns6dNuq70LCRbP8iO9CQp3+j4lMtX+DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg9/kHhtRTtbkfpxYAAAAASUVORK5CYII=",
    "https://www.altgraaf.com/images/logo.svg",
    "https://cdn.turtlemint.com/wp-content/uploads/turtlemint-logo.webp",
    "data:image/png;base64,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",

    Care_health_insurance_logo,
  ];

  return (
    <>
      <div
        className=" w-full flex items-center flex-col mt-40"
        data-aos="fade-up"
      >
        <h2 className="text-4xl text-gray-700 font-semibold">
          Our Partnerships
        </h2>
        <div className="w-3/4 grid grid-cols-4 gap-8 comp-grid ">
          {logos.map((logo) => (
            <img
              src={logo}
              alt="logo"
              className="aspect-[3/2] object-contain w-80 text-black"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CompanyLogo;