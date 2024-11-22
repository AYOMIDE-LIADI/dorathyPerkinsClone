import React from 'react'
import instagram from './images/instagram (2).png'
import facebook from './images/facebook-logo.png'
import x from './images/twitter.svg'


const Footer = () => {
  return (
    <div >
        <div className='bg-gray-200 px-[70px] py-[20px] flex '>
                <div>
                    <p className='text-[36px] font-bold '>Let's Get To Know Each Other</p>
                    <p className='text-23px'>Sign up to receive emails from us, so you never miss out on the good stuff.</p>
                </div>
                <div className='py-[20px] ml-[230px]'>
                    <div className='flex gap-[20px] '>
                        <input className='border border-gray-300 w-[450px] text-[17px] py-[7px] pl-[7px]' type="text " placeholder='Please Enter Your Email address' />
                        <button className='bg-black text-white rounded-full px-[40px] py-[9px] font-bold '> SUBSCRIBE</button>
                    </div>
                    <p className='text-[14px] text-center w-[650px] pt-[20px]'>By submitting your details, you agree to receive marketing 
                        communications from Debenhams.com by email. You can unsubscribe at any point. 
                        You also consent to the use of your details in accordance with our  <span className='cursor-pointer'><u>Privacy Policy</u></span> .
                    </p>
                </div>
        </div>
        <div className='bg-gray-100 px-[95px] py-[50px] gap-[200px] flex'>
            <div className='flex gap-[80px]'>
                <div>
                    <p className='font-bold py-[10px]'>Shopping with DP</p>
                    <p className='cursor-pointer hover:underline py-[2px]'>Unlimited Delivery</p>
                    <p className='cursor-pointer hover:underline py-[2px]'>Size Guide</p>
                    <p className='cursor-pointer hover:underline py-[2px]'>Klarna</p>
                    <p className='cursor-pointer hover:underline py-[2px]'>Student Beans</p>
                    <p className='cursor-pointer hover:underline py-[2px]'>UNiDAYS</p>
                </div>
                <div>
                    <p className='font-bold py-[10px]'>Customer Care</p>
                    <p className='cursor-pointer hover:underline py-[2px]'>Contact Us</p>
                    <p className='cursor-pointer hover:underline py-[2px]'>Return Your Order</p>
                    <p className='cursor-pointer hover:underline py-[2px]'>Frequently Asked Questions</p>
                    <p className='cursor-pointer hover:underline py-[2px]'>Delivery Information</p>
                    <p className='cursor-pointer hover:underline py-[2px]'>Returns Information</p>
                </div>
                <div>
                    <p className='font-bold py-[10px]'>Privacy & Legal</p>
                    <p className='cursor-pointer hover:underline py-[2px]'>Privacy Policy</p>
                    <p className='cursor-pointer hover:underline py-[2px]'>Terms & Conditions</p>
                    <p className='cursor-pointer hover:underline py-[2px]'>About Cookies</p>
                    <p className='cursor-pointer hover:underline py-[2px]'>Terms of Use</p>
                    <p className='cursor-pointer hover:underline py-[2px]'>Concessionaire Brands</p>
                    <p className='cursor-pointer hover:underline py-[2px]'>Product</p>
                </div>
                <div>
                    <p className='font-bold py-[10px]'>More From DP</p>
                    <p className='cursor-pointer hover:underline py-[2px]'>Careers At DP</p>
                    <p className='cursor-pointer hover:underline py-[2px]'>Modern Slavery Statement</p>
                </div>
                
            </div>
            <div>
                <div>
                    <p className='font-bold py-[10px] text-[16px]'>Follow Us On Social Media</p>
                    <div className='flex pt-[15px] pb-[30px] gap-[25px]'>
                        <img className='h-[25px] cursor-pointer' src={instagram} alt="" />
                        <img className='h-[25px] cursor-pointer' src={facebook} alt="" />
                        <img className='h-[25px] cursor-pointer' src={x} alt="" />
                    </div>
                    <p className='py-[2px] text-[18px] font-bold'>Download our app</p>
                    <div>
                        <img className='h-[60px] cursor-pointer' src="data:image/png;base64,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" alt="" />
                        <img className='h-[55px] cursor-pointer' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWYAAACNCAMAAACzDCDRAAAAkFBMVEUAAAD////m5ubl5eXk5OTy8vLx8fH19fXt7e34+Pj6+vrr6+v8/Px0dHSlpaVoaGienp7Ozs7X19cuLi7FxcXe3t6+vr6srKzIyMi4uLg3NzeRkZFVVVWvr69ubm5JSUldXV1+fn4nJyc9PT2YmJgxMTEQEBAYGBh6enofHx+Hh4dNTU1BQUFiYmIVFRULCwvxfojrAAAVC0lEQVR4nO1dB5uyOBAmQAqEdQXF7lrWbW77///uMhNKsABiWf3OuefuRoXw8jLMTCZlLYLi2iBbeoC6RN13lOoI1D1D56gzQ6eoU9Q56mxL91AXqPuoS7iUG2zpiMbV0BxDvyXItnV7mO8032m+03wjNLtnxuycnuZrgZzR7IAYeopZqa7c0n3UE/yoJ5hRTzCjnuDc0hPMqCeYUU9wAoQEp6m7m/qNQHYsFyX5CsTe0gPUU7QgKdpc56gzQ0+Rg6RoQVK0IClakGBLtzeh7dOvH7KFNp0axe53r9zdme9e/fdQ1HB35rtn6u7tQb7TfKf5f0izsy94H4rZxGno7nbwPpbmK4K8RbNjYHYqMLsNMLsmzgrMjoHZ0DdpvgHIaUK3O3ibAbs8eNcJ2Mm7VyN4mwH7wHzjOiHfe4HX1gu8Fsx3mu80N6d5byTZF7wPxLwjkhxL87VBTml2DMyGHjgbpmEbOG3DNGwDs70Ds72pJ5jtDdNwgi0d0SR5hanfEmT7XtO4COR7L/AikO80XxfNJ+u5GpirulRH0nwpyMfSnOAkUijRGIjI9QB1bugag2/oHuoaD0c9MHTdJAU1uRTbowtDl8a5Wzq7OGRRm2bb+CGh2c5Mww/bKC2UA/UjTv0r/cDDp6GgyqCNfMMONtks1DQcQ09tmkVP1l3K5WfNjqxp0PFf38NtSOuoXiB5/Gv8tyILvid216H54a/R344sIIk5lGZdKe/9NfZbkp4oozkASaMifkhyjIAEnb+GfkvSgcqHZjPJNwxmS2oa9t2YD5LBRo7h1Ktp8Hv8O0jeSaNeIF/+NfDbkk5Dmv8a963JITTno/H0r2HfmpCNCQQmzRIkzTFAlWm+cbfmA4VAjgEUpvlGpgdlNY2/hn1rQpvVNI665svT/DTgb0dos872EVd8iAiZngz/LpkMur81Dlt31w0afwmjBmddmuZPONvvVx/YZoxzwQeLw68x8WrFjj5vHd629dLo5g+n2TmG5jU249cwo6lkYTdUB8uvQy8yp7UyoRY9jOZHfEUa0pwvkNhd08AcQ8qi3pTmsU5Vgnn1oVOKHfp3SvyPA68y4bWsuXWQNX8G+tk1o5lL28c719lbkOuypKbBGlxJyZOe9OCIGscOSYj/XzLZPfAyk3pMtMnwgEY/iX52S97k5kmjmkaz7smHr4eJRQ3XnNFsjQV7gf9PutTj3RmokQSP/RCDvb+wqKMocxfPMSEDPCOl+bUlPU9qBzUasiDwV0njLeGT1qpA82vL9rxYV9GnYjGKOB+85T93JSGxswaaqXpAhCdjRyOoCg0rIy5p1NluRvM0GY2vVRHJaB5RBmOO34TbXcEo6D0sd/dk8AveHiJ/X4TqGRJ9TkLzb0xZV6U1+FAfSa+trt/GJgeMM0JogWaXsG7MeVtfe+oxl3p2/nOkXKtHVkCz7BMYI8eB0DefdFs2qUw+mtHcyGn8Ek1zvUHEjOY3hyoj+giQ2lD6FnAm1X+lCwNlXQLNTW3SAsr5t5XR3GXuG7gGPZz2qv6d6x/G+OD6xKQ5JOxHNcAIvC6tgCq6n3xihOpPom96yW2pjqSa2hAPcUnVLVXR7OyqaTiNrHmNNDsirHV0RvOPw8YQPD2IhC+cgL8g/Nn69laQf3sERhj6Ei1PMHALmuY3zpBfkbgSfbfgf2KGrNgGzc9EUxpy+K4VxPoAo6z+nflmCs22CVUPbsbwsmuv6p42cozCoghp5BiG7kvZqKbRVWkGlaxmdp/R3KH8AU7W58XYtQn9hdX3loGtjAwZmTKMkzFYYULzQxKr+pqfUV/dVkBGSg0C/GFq9JLGST4zDlwLBqOR38ikeU60bXV0Ur4gVLm+MXeHvV4v5G7F3ahbF8igv8nmyWsasQ2TKevZsmKHJff4TeBF7kltehEDbsaKAMGU7f2MU2+KP4foiCcUCF4kKNcMOHhQoKOh9EfovPCHIcsTujHTRD3g01wFiDKSBs2T5IiRPvuBsg4+Qu55HidBxd1csKYRS8Hc2jNopinNETriodCvvo3cPBO3o5zx2H+Ycsw9CjTr7sljgrLNwN61I2ZAs5X8MDVoXlOB2cIYzWAnzVTT/GLS3CY1k80LdrYHYeu7/tEpzWOC3nit7/KN+NgGDRbk0/ry2wN98ztoXiaxLxLTLCpSpJkSbCM0aJ552pHrBnZbs847CjQ/EvZa627OTfPL5+fLxleTp6en78oeNDqN13mY5AM/OtsOiaZ1Shj0ceLY1jn4ULvR1GmgG+0Rx4LnwxW1M0KW4D+Q5haxP2CWijTy966AhlWUhlx5F80dRr+ttw2nYUkeQXY6q0qc69HsNKtpfPdiyShjvdyKn3pURSLGhDv8LD13KmwXp50mXYq5R+KhIMEzfnrUVb4p8yb4ObNm+HbOkeYPQdg0pLqA4hK5GtAYQ6D64HW7pOWZLNo+nUb6zbFWOoJEwhzAd4WwxznNnALNn5yJMHR1syWyu6aBPFs+SBoV8QOqIvBr0fwuiIDwStUFZBvoma1UXh9AvqFaESQqM+lxFMdxaNQqR11GRdbfimPgdzJIkrVWjA5g6kKqNomSODuVVHT1c1BZNI067XCOH4aCx++jqNDZbkvKQn3wOsZfhmHb+H3Ui2MVWTouvk9PYYRTVV5bkW1H0zerXDjkGMBmkm8YzFqq5+1kUdFR/xxU0+ixdNUMnCm4HdpazxZy2LRBlfNEUsXLiQVzDKAwsWNDP6qzvYxFjanvXruyoX9DyJlqGq6ss8LA4U0GMG5QmtFc6TQiuUntHpr/J7PESmlWoTCvaTgH1DTGyperU9OFdbCPkqmnNDve/8SYk5qGY9Q0Mt3Sa2eSHANUkeoVNY03n+PxDA/XOkWdFnTv70LghYX4vsBb1zmGofvGBmlZTQP06rx5JertNtZkyPM2xahpGBuk4Q5pzXuBsV1nOb8XX+YWr0HO0dme81q7JviTC93jFcg5aG6LOjTbdUui/4LUoDnf/THXS9sc5BtVOEaO4eQ5Bui01iKhMUq9MlgdeXsfupzzuLe+6BRtumsjS0dvXulnOYYQqOq1tEovp1mdkeQYeLipJzkGtlKnv/uiAZ0qI/mdqourdCkIAu43maTVVBRzHt66yNlMdMvZ2DY0q2k4pd2T3yzHELkdb+cbtcYTx7C9qVs9clxPngFEtgnrJSPwRo7hGHrTXiBYYI3l/LXuMkQIgX+SN/xFr2lnKqHnnJij0aNzL4smp69pfJ2O5hfPtuPY8U/jNWBGHvHHzz8/H7N1TJ6Tr2cr51Svy15pRnOpNT/Xo9kuayORMXXkdGj7tQdqy2QCmzWIbELeZ1q69tJpNGeUMpqd3btNk4qaRofsyjG2+4I10MXMpe9j6Z9keUALIMy3v5fiMjTv2SzbSqKiB1LUvdI2Pd9Lcwx1dJZjgE5znVRPqH1TfjTozDzukRM4z1ClObsG+hnzg7PT7CV5BRLom2zu2fS9uqZh19pBXVTP8XpnPsxlIbKwrPa3s1ziMG7nadxuv+fR8Uf9gJ+W7+PW6mlzvq5LdsxFHb18+L5rd63lsmOMDX+O+8Pp2BytnM/n3yp9/x2H3Szh/523W+3VY42lAbtrGs5RNY2w1haFdrVz7iqv3IVhPHVwfi8jwpgC8BwSztSbQbsp0Y+EwUS3z4hSBtvpbCy9iBR8vtHB/yA6kEjGPBz8Rlklt0vtVXakyz3v2fqCTXrSitfUw+13uKwugZ2js92XtWoaQZU5vwmdYzyoc2m+fPlXdanI6zfJhom9mf5hxl0SWAs0E4QpCgv42wA/KppeSrPeWErb/5fLMsjMSV1brG7k6wu50qxOcFskLhUI5lbNdD8HzQtab8PNoKIf+MRdP1AWthS2LYxRaKrSnzm2SRliDvT4/ZevaIYfBOcMYRYyoi+4LxkX5i1kNDORWvOISoDMbb1FAEvsX2XwdBaTjOZnVOPh0GaKwqo5dDVrGpv5RmmbI7qvprFRb64A11PYMKHtSsc2vKpQOFXywVZfX4uQAWbdUAdoVndjL55HiwgvW5h7NWWAnoez/Kuf9ngcKN8crcfjdgts8tdVocWL4Ji5LdXxVFvqQL2iK9U4jWIYJ36N1WOx8fGumOtVlc5pyR/k8Iwcw9CZyhLKG42VpwNJcgzU6Q49KO8VqNP1dNiFujDJvSoFOGkOtoYG9V41HQIwU5fcJ/BhZjYYAiAWkOi9cBkuWP44hupaPP3oKh+fTJoZqKtyHqT9pCnnfpqD95VesUDGLzBY0JvWNGAOUI2aBti0iGf7W4FJnP4PqnB47jXw3cue0FQok0POlwAtX6mi3gHVuSk0CSsYAldZqGuUBwt585KYvmaCngl9CXYhg/RZ/6iDeDqX6idgLisPNGSjpmHmzQ17gTBXtvYWhbS/d15UVx2TkAn3mHsNwEzn6adf2FMPgx3QbIu0D219QYIii22+e8kOi34eCws0twFZPntEXZhSfKMGBR+0UjTn1YKIOhXVc3L6moYS7tfeCXJ/uQIieTLyjcsJ5wZmabj1obR1IoI0G34oMiJYJmMpYHKDJCxNQwo0R3Cl/Mk/QCxEctGas3dAxUJjKk9L3dbG89yQZjRXzdNokbo022yfU/s2bvgXwnQ2fxNozhc6WGtltfjOAs2ml2gpO2cFN4wyGXLcezN9UgWa0c/lxz4DzWi2SHOaGv1CKjKAjRP70+m0HzEVokudcxnNm765Zk3DgpKjs5lj7Mk35N7l2z04RhmelLaPFczMXjZonqgEQkCkR5qNkL9WP7BdM0GWIW7imbhTk+YllJcc41AKlgFKaPI/IrBBNk7hxFtR4SF3VruE7Bg3SWlmSrKoCHqaPzC/rEnkiBaOV3qaYxR1QfYaAR7EUDgen2UNcK7hCj9VGOdg6h3iCWrMWV5D0rA7NHVVk+nwiUqL/LS5kZ9/jyI8ytCoQqhApN8+qyyG5tB8pfPSToA6nuGt61vRundcTcNKk/cafxVu76KCOc2noApY0eVmXkMWx1MgHcDfOtQtLEJbwQ/bTgMFoNn6EeuahpaR7xajGQ5fgtJVELIoPGIqt0bzcSMQ1VcvX7lbljdveeUDZut3K72y3vp476uGjrXXHYD0ej3V1coq1NA9MWjG+AjxqKM622Yhow8/7FmH0VPuiGvP7/l5FrhkxWLLh1SQcY7VQJ2QUfkibCc4ZDbruRZFLINaNO/vPGG5Iv8YAc7EawDNxtjLEJqETANpNpw2Zg17yq1TsZNmy4ViS37YnCnIaN0wXJbR/Kq6ir5xpUo529qTcR2a92csM5USCsMy20LhTB4K0ExyVwhtBlDERJrzxAp7Gvsq42DNQlfkCjSHYOV530X1fagOlQWaoQjpVQYoQ85R09AS1fDN++cd9anyisYL/8UVzuRtRpqzVxa20tPGjb45z23RZ+zbZCBQ95E4HvDN2XvzRB3DOX8wgIwJtiLWoHnNFPwDdlYu880cJQn2Bb0OzUvu6eMpnkq39bJ6i1THFNJGFy6rC+8UA3zi1UfMUz9goOsESs92hpkTdSVi1OOeDGc68FUbyeVdBdPPOv0Q1/y0yxSqnwJd04gAct4AZ9Tz5zVo0OJvMpjrJXlzraXxc1pe0yhb6DxjfsHNwhI16QpdZUejsNniF3b7xgVJ2i6XSaUZe4Qr0E23Y0056b0/L63X0SLGvFnXS6w+QKOTnze02gViQ55/MFfmulcOPBhOewx/LNdrae++nLRKs+byvLl5L1DLOjC88raHFiWTL1ZQ/i30LObQVYkyzLa0qevaHHWmbxI72/CDevF90GWh0hrhnwPwZMwY9gJT7zLRd8iSrA5yJM7ifmuorSRxbBs0W12oJwiV0IWRrVLqiplq5Cw1jURaObXMo4oBHzfW1TT7ZWvpIlvRXBzoCNSpbJRgll1w3hqaTOsW2AscdkX6AgrbXPk585M/yJE89TyhHuiXSyZvVxchw0o7YtTk7A2aLeiyZ3/rpGqcqhnNdffTQJ65LXk8xoWgy8ehJ/SfeZJlLI+C7clXPS6lXhEEZ4fW0Et8WJi+sEhzzxroWyder9DDfGvrFypQj5v5XSPR+8V79GV6wXeut1lWr0o3G+bCkwuAHmxP2noiU8ArNrwpo/lI3wzyGQXEd3tmRrEObeq55VF6shqPVxubF8/gu0WCGSzvc+oK4fTm2REJzdZ8IIVwp9vP8bEV2UJE4XC90TNeR1LGYY7paRrGcRSujCZmk8nnZmI0aQ1cKd2oVbnPMqmoaeyOkFX7GhjS+dyKDm+d46bEqdSC7hp36Sifyg/df+oyQnZnbCBH5s3nE6hp7JqBh3nzIX2zy8m5ahrnlI3OdibYC7zONQCX3yP0eLnTfBH5N2m+Ot8synzzldJ8tprG+UTB4DszjYBx7zozjeB8NY2zCXQ9dlnzCCZPXCfNZXnz0Z3tM8lkNpvtqta/qh+2s/SrENKos33/EwaHyUcjmh0+/2vgtyVPZTTv982yztbAd8lkWOabt6IiTXVac5e7u6C8smzIiBvDR9U1jf/RVhgnkJbYuYaquqZBSPlmfXcxZOLZjf/IqH+dmdMVypzazWkmbP7X+G9D3mv+ZeKdvlmldXxYtTPmXax5tH99a+KbaYV4Qdx6eAR5QEH1CdWno3WjyXPrZ4O87rueV8ViSd6c69RTOYkedySYnwR7dFKqB3t0f4/uGTov0709+mUgCzDeffvCVHe2bVhVoHU4Qes+6uZSNWM6TDJPgxrTYVg+/ZYwJ9cF6poTibpv6OWY3d2WYcK8KOQ9XrlmTcOgOdf9dLEoqbXRgzn9VmHOdaG3TzP0+pjd24N8p/kyNNfwzVtv4N69B0rn7CdvY4LTNd46N3cURziNa4ZcmWnc5RRSlTeXRJU6+2kUjKLCQPYYxVYSWkhIbwNyRU2j3MXV2oFA49zSy11caZfK9NA3Armis32VmO8032muoLmmo3OvwNEd6JuvAXJa00jq/blOr0bfgrZPv2bIjfJm58RJqGEU58qb/xjyvRd4Ech3mu80/0M01/XNtQL2CQoEbrWjq+ubrwhyyYzQTKdb+o7VrEfofEsvhVNHvzbIh9Y0RA0DOSAJdRokoYfWNK4A8r2mce9s32m+09yM5hJH516oQLAnYDfxzdcG2SlZ5XqBQH6ivOL6If9ZTcMI2MII2Ndc0zgC8r0XeBHId5ovAvk/rtYCO92bsxYAAAAASUVORK5CYII=" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-gray-100 px-[95px]'>
                <div className='py-[20px] '>
                    < hr />
                </div>
                <div className='flex gap-[90px] pt-[30px] pb-[60px] items-center'>
                    <div className='flex gap-[30px]'>
                        <img className='h-[17px]' src="https://mediahub.debenhams.com/dbz_prod_debenhams-logo-border-2024?fmt=auto&h=36" alt="" />
                        <img className='h-[17px]' src="https://mediahub.debenhams.com/dbz_prod_wallis_logo-2023?fmt=auto&h=36" alt="" />
                        <img className='h-[17px]' src="https://mediahub.debenhams.com/dbz_prod_oasis-blk-on-wht?fmt=auto&h=36" alt="" />
                        <img className='h-[17px]' src="https://mediahub.debenhams.com/dbz_prod_coast-blk-on-wht?fmt=auto&h=36" alt="" />
                        <img className='h-[17px]' src="https://mediahub.debenhams.com/dbz_prod_burton_logo-2023?fmt=auto&h=36" alt="" />
                        <img className='h-[17px]' src="https://mediahub.debenhams.com/dbz_prod_misspap-logo-blk-on-wht?fmt=auto&h=36" alt="" />
                        <img className='h-[17px]' src="https://mediahub.debenhams.com/dbz_prod_warehouse-logo-blk-on-wht?fmt=auto&h=36" alt="" />
                    </div>
                    <div className='flex gap-[7px] '>
                        <img className='h-[35px]' src="https://mediahub.debenhams.com/dbz_prod_visa-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                        <img className='h-[35px]' src="https://mediahub.debenhams.com/dbz_prod_mastercard-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                        <img className='h-[35px]' src="https://mediahub.debenhams.com/dbz_prod_amex-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                        <img className='h-[35px]' src="https://mediahub.debenhams.com/dbz_prod_mastercard-maestro-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                        <img className='h-[35px]' src="https://mediahub.debenhams.com/dbz_prod_visa-electron-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                        <img className='h-[35px]' src="https://mediahub.debenhams.com/dbz_prod_applepay-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                        <img className='h-[35px]' src="https://mediahub.debenhams.com/dbz_prod_paypal-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                        <img className='h-[35px]' src="https://mediahub.debenhams.com/dbz_prod_klarna-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                        <img className='h-[35px]' src="https://mediahub.debenhams.com/dbz_prod_clearpay-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                    </div>
                </div>
                <div className=' flex justify-center items-center '>
                    <div className='mb-[40px]'>
                        <img className='h-[25px] ml-[120px] p-1'  src="https://mediahub.debenhams.com/dbz_prod_dp_logo-2023?qlt=80&w=216&ttl=86400&dpr=1" alt="" />
                        <p>COPYRIGHT © 2024 DOROTHY PERKINS</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Footer
