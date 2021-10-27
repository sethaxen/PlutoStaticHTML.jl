var documenterSearchIndex = {"docs":
[{"location":"#PlutoHTML","page":"PlutoHTML","title":"PlutoHTML","text":"","category":"section"},{"location":"","page":"PlutoHTML","title":"PlutoHTML","text":"<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/fonsp/Pluto.jl@0.16.4/frontend/treeview.css\" type=\"text/css\" />\n\n<style>\ndiv.markdown {\n    padding-top: 1rem;\n    padding-bottom: 2rem;\n}\n</style>\n\n\n<div class=\"markdown\"><p>This package can be used to convert Pluto notebooks to raw HTML via:</p>\n<pre><code>using PlutoHTML: notebook2html\n\npath &#61; &quot;/path/to/notebook.jl&quot;\nhtml &#61; notebook2html&#40;path&#41;</code></pre>\n<p>Actually, the web page that you&#39;re looking is a Pluto notebook, see  <a href=\"https://rikhuijzer.github.io/PlutoHTML.jl/dev/notebook.jl\">notebook.jl</a>.</p>\n<p>Note that, compared to the default Javascript Pluto output, raw HTML is easier to embed in Documenter.jl &#40;as this web site demonstrates&#41; or Franklin.jl. On the other hand, not all outputs that Pluto supports are supported by HTML.</p>\n</div>\n\n<pre><code class=\"language-julia\">begin\n\tusing CairoMakie: lines\n\tusing DataFrames: DataFrame\nend</code></pre>\n\n\n<pre><code class=\"language-julia\">lines(1:10, 1:10)</code></pre>\n<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAJYCAIAAAAVFBUnAAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nOzdeVzVZcL//8N6gAMHBFQQLEE8KiiyjOICbZPkzGQ3lSnb0VxLHbFpyvr1nbT7ITPd9+jMzU1NOdN2xyJuVApmhZlbNRYcFhUUVBZR2XdZD+f8/nBmWsZK8HO4zvJ6/nE/HjLied/WB14hXpeVXq+XAQAAQDrWogcAAACYGwILAABAYgQWAACAxAgsAAAAiRFYAAAAEiOwAAAAJEZgAQAASIzAAgAAkBiBBQAAIDECCwAAQGIEFgAAgMQILAAAAIkRWAAAABIjsAAAACRmK3qALCUlpaioaMKECaKHAAAA3ERVVVVISMhTTz116+8i/itYRUVFVVVVoleYNp1O19nZKXoFhq+np2dgYED0CgwTD6Cp4wE0aSPzAFZVVRUVFQ3pXcR/BWvChAkTJkx46aWXRA8xYVqttr6+3sfHR/QQDFNzc7ODg4NCoRA9BMOh1WobGhrGjRsnegiGiQfQpI3MAziMShH/FSwAAAAzQ2ABAABIjMACAACQGIEFAAAgMQILAABAYgQWAACAxAgsAAAAiRFYAAAAEiOwAAAAJEZgAQAASIzAAgAAkBiBBQAAIDECCwAAQGIEFgAAgMQILAAAAIkRWAAAABIbcmDpdLpPP/10+fLlSqXSysqqqqrqez+hoaFBrVa7u7s7Ozs/8MADZ8+elWYpAACAiRhyYJ06deoPf/hDVFTUM8888+//68DAQHR09IULFzQaTXV1tYeHxz333HPt2jUppgIAAJiGIQfWnDlzPv300xUrViiVyn//X3fu3FlcXPz2229PmDDBw8Pjb3/7W39//7Zt26SYCgAAYBok/h6sAwcOTJw4cerUqTd+6OzsfN999+3fv1/aVwEAADBmEgfW2bNnVSrVt98yefLkysrKnp4eaV8IAADAaEkcWC0tLa6urt9+i5ubm16vb2trk/aFAAAAjJattL+cXq//8bds3779e9+SNWPGjOnTp1+5ckXaJRZFq9U2NTWJXoHha21tlcvlTk5OoodgOLRabXNz879/9IOp4AE0XS092qc/rvqFr+2Snxn2Aezs7HRxcRnSu0gcWO7u7u3t7d9+S3t7u5WVlZub240frl27Vq1Wf/snpKam2traenl5SbvEomi1WisrK34PTZednZ2Dg4NCoRA9BMOh1Wqtra15AE0XD6CJOnqxeWlWaUt3/4KJvoZ+AJ2dnYf6LhIHVlBQUElJybffcv78eT8/P0dHxxs/VCgU3/uX2M7OTiaT2djYSLvEouj1ehsbG34PTZfNP4keguHgATR1PIAmR6vTJ+eVJx+umOSpOLD8Z962PYb+x2dlZTXUd5H4e7AeeuihixcvlpWV3fhhV1fXkSNHHnroIWlfBQAAWKbLbT33vf7Ff35SHh/qk/+bu2aMG9qf3I0YiQMrISFh+vTpK1asqKqqam5uXrNmjZ2d3U2PJAUAABiSD87UhfzpWPHVjsyEsLT4UIW98X7dcciBdePbfaysrH7zm9/IZDI/Pz8rK6sHH3zwxv9qZ2eXl5c3ceLE0NDQO+64o6mp6ejRoz4+PhKvBgAAlqRXq9v4wZmH3/na30NR8Ju74sOMPS2G/D1Ytra2P/6XZcaOHZuRkXEbkwAAAL5xrqErNr2g5FpHUpTftoWB9jYS//mbIUj8Te4AAAASSsuvXZddorC3Pbgq4hdTxoiec6sILAAAYIw6erVP7ivJKrzy80me6fGh3koH0YuGgMACAABG5+vLbXHpmurW7i3Rqs3RKuuhH5QgFoEFAACMiF4vSz15aVNOmbdSfmz93LkT3EUvGg4CCwAAGIuGrr5lWUUfnWt4NNj7jcUzRjnaiV40TAQWAAAwCofLG5dmFbX1DKTEBG2M8hc957YQWAAAQLAbt99szauYOtb54zUR072VohfdLgILAACIVNXSHZ+p+bKqVR3uu2NRsJMRn89+6wgsAAAgzL6Sa6v3FOv1st3q8MUh40TPkQyBBQAABOgZGHz+YFnqicrZd47amRjm5+4kepGUCCwAADDSztZ1xqYXlNZ3JUX5bV8YaGcKt98MCYEFAABGVFp+7ZP7Sjyc7D5bN+cufw/RcwyCwAIAACOk+Xr/8t1FOWfrHwryenvJDA+FvehFhkJgAQCAkXDsYnNipqbxen9KTFBSpL+pXX4zNAQWAAAwrEGdfmteefLhigBPRc7KiBAfkz/m6icRWAAAwIAut/UkZhYev9SsDvd97dHpznKLaA+L+H8SAAAIsf9M3co9xf1aXUZCWEKYj+g5I4fAAgAA0uvV6p7LLX3lZGW4r1tWYliAp0L0ohFFYAEAAImda+iKyygovtqxIdJv28JAe7M75uonEVgAAEBKafm167JLnOxtcldG/HLqGNFzxCCwAACANDp6teuySzI1V+4L8ExPCB2ndBC9SBgCCwAASCD/cltchqaqpXtLtGpztMravM+5+ikEFgAAuC16vSz15KVNOWVeSvnRdXPn+bmLXiQegQUAAIavsat/WVbhoXMNj0z3fnPJjFGOdqIXGQUCCwAADNOnFU3qnYWt3f0pMUEbo/xFzzEiBBYAABgyrU6fnFe+Na9iyhjnj9dETPc2/9tvhoTAAgAAQ1Pd2hOfofmiqkUd7rtjUbCTvY3oRUaHwAIAAEOQXXJt9Z5inV62Sx2+JGSc6DlGisACAAC3pGdg8PmDZaknKiPuGJWlDvNzdxK9yHgRWAAA4KeV1nfGpmvO1HUkRfltXxhoZ3m33wwJgQUAAH5CWn7t2uwSF7ntR6tnR08eLXqOCSCwAADAD2rvHVizt2RP0dX5qtFp8aFeLnLRi0wDgQUAAG7uVE1rXLqmtr2X22+GisACAADfp9PrXzlZ+WxOmZ+746mNkaE+rqIXmRgCCwAAfEdte29Chub4pWZ1uO9rj053llMLQ8ZvGQAA+MaBs3Urdhf3a3Xp8aGJ4b6i55gqAgsAAMhkMlmfVrcpt/SVk5VhPq5Z6vBJngrRi0wYgQUAAGTnG7riMjRFV9s3RPptWxhozzFXt4fAAgDA0qXl165/77SDrXXOylm/mjpW9BxzQGABAGC5Ovu067JPZxTU3hvgmZEQOk7pIHqRmSCwAACwUPmX2+IyNFUt3VuiVS/OV9lYc8yVZAgsAAAsjl4vSz15aVNOmZdS/tm6uZF+7qIXmRsCCwAAy9LY1f/4rsIPyxoenu715uIQdyc70YvMEIEFAIAFOXKhSZ1Z2NLdnxITtDHKX/Qcs0VgAQBgEbQ6fXJe+da8isljFIfWRAR7K0UvMmcEFgAA5q+mtSc+U/N5ZYs63Pf1RcEKexvRi8wcgQUAgJl77/S1VbuLB/X6rMSw2FAf0XMsAoEFAIDZ6u4ffGr/mTf+XjN3gvvOxLA7RzmKXmQpCCwAAMzT6Wsdsemacw1dL/x80n8umGzLMVcjiMACAMAMpeXXrs0ucba3/XB1xAOTR4ueY3EILAAAzEp778ATe0t2F129XzU6PT7Uy0UuepElIrAAADAfX9W0xWUU1LT2bIlWbY5WWVvxx4JiEFgAAJiDG7ffPJtT5uPqcOLX82bfOUr0IotGYAEAYPLqO/uWZhV+cr7xsRnj/vZYsJsjt98IRmABAGDa8sobl+4sbO/VcvuN8SCwAAAwVQODut8frtiaVxHiozy2Plw1WiF6Ef6BwAIAwCSVN16PTS8outq+IdLvjw8Gym2tRS/CNwgsAABMT1p+7fr3TjvYWh9YMevBwLGi5+D7CCwAAExJZ592ffbp9ILaeyZ6ZCSE+bg6iF6EmyCwAAAwGQW17XHpBZUt3VuiVS/OV9lw+42xIrAAADABN4652pRTNtZFfmTt3Ch/d9GL8GMILAAAjF3T9f7Hs4oOltXHTPN6a0mIuxPHXBk7AgsAAKP22YWmxMzClu5+jrkyIQQWAABGSqvTJ+eVJx+umOSp+HB1xIxxStGLcKsILAAAjFFNa09CpuZkZYs63Pf1RcEKexvRizAEBBYAAEbn/dN1q/YUaXX6nYlhcaE+oudgyAgsAACMSK9W91xuaeqJypnj3bLUYRM9uP3GJBFYAAAYi7L6rtj0gtN1HUlRftsWBtrbcPuNqSKwAAAwCmn5teuySxT2th+uilgwZYzoObgtBBYAAIJ19Gqf2Feyq/DK/arRaXEh3kpuvzF5BBYAACJ9VdMWl1FQ09qzJVq1OVplbcXtN+aAwAIAQIwbt988m1Pm4+pwfP28ORNGiV4EyRBYAAAI0NDVt3Rn4cfnGxcFe7+xeIabI7ffmBUCCwCAkZZX3rh0Z2F7r5bbb8wVgQUAwMgZGNT9/nDF1ryKqWOd856cM83LRfQiGASBBQDACKlq6Y7L0JyqaV0dcWdKTJCjHbffmC0CCwCAkbC3+OqavSW21lb7l89aGDRW9BwYFoEFAIBhdfVpf3ug9G9/r757okdmQpiPK8dcmT8CCwAAA9LUtsdlFFxs7t4SrXpxvsrGmmOuLAKBBQCAQdw45uq53LIxzvIja+fc5e8hehFGDoEFAID0mq73L99VlFta/x/TvN5eEuLuxDFXloXAAgBAYkcvNidmapqv96fEBCVF+nP5jQUisAAAkIxWp0/OK08+XDHJU5G7MiLERyl6EcQgsAAAkMbltp6ETM2JSy3qcN/XFwUr7DnmynIRWAAASOCDM3UrdxdpdfrMhLD4MB/RcyAYgQUAwG3p1eqeyy1NPVE5c7xbljpsoodC9CKIR2ABADB85xq6YtMLSq51JEX5bVsYaG9jLXoRjAKBBQDAMKXl167LLlHY2x5cFfGLKWNEz4ERIbAAABiyjl7tk/tKsgqv/HySZ3p8qLeS22/wHQQWAABD8/Xltrh0TXVr95Zo1eZolTXnXOHfEFgAANyqG7ffPJtTNk4pP7Z+7twJ7qIXwUgRWAAA3JKGrr5lWUUfnWt4NNj7zcUz3By5/QY/iMACAOCnHS5vXJpV1NYzkBITtDHKX/QcGDsCCwCAH3Pj9puteRVTxzp/8sTsaV4uohfBBBBYAAD8oKqW7vhMzZdVrepw3x2Lgp24/Qa3hsACAODm9pVcW72nWK+X7VaHLw4ZJ3oOTIn0B84eOXLkvvvu8/T0VCqVM2fOzMjIkPwlAAAwqJ6BwY0fnHns3fwpY5wLf3sXdYWhkjiwTp06tWDBggkTJpw5c+by5csPP/ywWq1OS0uT9lUAADCcs3Wds1JO/OXzqi3RqpO/nufn7iR6EUyPxIG1e/fuwcHBV1991cvLy9XV9YUXXpgyZUpmZqa0rwIAgCHo9bK//b16ZsqJtp6BI2vnvPTAZBtrDhHFcEj8PVi2trZW3z3QVq/X29rynV4AAGPXdL1/xe6inLP1DwV5vb1khofCXvQimDCJv4K1du1aT0/PX//61/X19e3t7S+//HJNTc2mTZukfRUAAKR19GJzyJ+OfXK+MSUm6IPlM6kr3CaJv7bk5+e3f//+Rx555J133pHJZE5OTu+8887dd98t7asAACCVQZ3+D59V/vexqgBPRe7KiBAfpehFMAcSB9aXX34ZHR2tVqt/97vfOTo6vvPOOwkJCb29vcuWLbvxE/bv379///5vv0tPT88dd9zR3Nws7RKLotVqW1tbHRy4y91UtbS0ODg49Pb2ih6C4bjxAMrlctFDMBxXOvpW7CstqOtJmDH25Wg/J7sBPh+ZlpF5AHt6ehwdHYf0LhIH1ubNm8eOHfvqq69aW1vLZLKnn3762LFjzzzzzL8C64477oiMjPz2u3z11Vc2NjZ8bLodNjY29vb2/B6aLvk/iR6C4eABNF05ZU3r95cNDOp2PBSQED5e9BwMx8g8gDY2Qz5gVuLAKi8vnzZt2o26uiEoKOjAgQNtbW1ubm4ymSw0NDQ0NPTb71JTUyOTyZydnaVdYlG0Wu3169f5PTRdfX19Dg4OCoVC9BAMh1ar7e7u5gE0Lb1a3XO5pa+crAz3dXv9Qf+p3m48gCZqZB5Ae/shf0+exIE1fvz48+fP63S6fzXW2bNnlUqlUskfaQMAjMK5hq64jILiqx0bIv22LQzsbGsVvQhmSOK/Rbhx48aLFy9u3Lixrq6utbX1z3/+84EDB5KSkr79NS0AAERJy6/92f8cv9Lem7sy4n9jptnb8OkJBiHxV7Aee+yxQ4cOvfzyy9OmTRsYGAgICHjzzTeXL18u7asAADBUHb3atdklOzVX7gvwTE8IHafkLwbBgKQ/AnTBggULFiyQ/JcFAGDYvr7cFpeuqW7t3hKt2hytsrbifHYYFmesAwDMmV4vSz15aVNOmbdSfnTd3Hl+7qIXwSIQWAAAs9XQ1fd4VtGhcw2PTPd+c8mMUY52ohfBUhBYAADz9GlFk3pnYVvPQEpM0MYof9FzYFkILACAudHq9Ml55VvzKqaMcf54TcR0b44KwkgjsAAAZqW6tSc+Q/NFVYs63HfHomAn+yGfwQ3cPgILAGA+skuurdpTrNfLdqnDl4SMEz0HlovAAgCYg56BwecPlqWeqIy4Y1SWOszP3Un0Ilg0AgsAYPLO1nXGphecre9MivLbvjDQjvPZIRqBBQAwbWn5tWuzS1zkth+tnh09ebToOYBMRmABAExXe+/Amr0le4quRk8enRYXOtZFLnoR8A8EFgDAJP29ujU+Q3O1ozclJigp0p/Lb2BUCCwAgIkZ1Om3H7344kfn/T2cvkyKDPVxFb0I+D4CCwBgSmrbexMyNMcvNavDfV97dLqznE9kMEb8ewkAMBkHztat2F3cr9Wlx4cmhvuKngP8IAILAGAC+rS6Tbmlr5ysDPNxzVKHT/JUiF4E/BgCCwBg7M43dMVmFBRf7dgQ6bdtYaA9x1zB6BFYAACjlpZfu/6904521jkrZ/1q6ljRc4BbQmABAIxUZ5927b6STM2VewM8MxJCxykdRC8CbhWBBQAwRvmX2+IyNFUt3VuiVZujVdaccwWTQmABAIyLXi9LPXlpU06Zl1J+dN3ceX7uohcBQ0ZgAQCMSGNX/+O7Cj8sa3h4utdbS0JGOdqJXgQMB4EFADAWRy40qTMLW7r7U2KCNkb5i54DDB+BBQAQT6vTJ+eVb82rmDxGcWhNRLC3UvQi4LYQWAAAwWpae+IzNZ9XtqjDfXcsCnaytxG9CLhdBBYAQKT3Tl9btbtYp5dlJYbFhvqIngNIg8ACAIjRMzD4/MGy1BOVs+5wy0oM9/dwEr0IkAyBBQAQoLS+MzZdc6auIynKb/vCQDtuv4F5IbAAACMtLb92bXaJi9z20OrZD0weLXoOID0CCwAwctp7B57YW7K76Op81ei0+FAvF7noRYBBEFgAgBFyqqY1Ll1T297L7TcwewQWAMDgbtx+82xOmY+rw/H1c2ffOUr0IsCwCCwAgGHVd/YtzSr85HzjYzPG/e2xYDduv4EFILAAAAb0yfnGpVmF3f2DafGh6nBf0XOAEUJgAQAMok+r2/Lx+W2fXQzxUe5Sh0/yVIheBIwcAgsAIL3yxuux6QVFV9s3RPr98cFAuS3HXMGyEFgAAIml5deuf++0g631gRWzHgwcK3oOIACBBQCQTGefdl326YyC2nsmemQkhPm4OoheBIhBYAEApFFQ2x6XXlDZ0r0lWvXifJWNNcdcwXIRWACA23XjmKtNOWVjXeSfrZsb6ecuehEgGIEFALgtjV39y3cVHSyrj5nm9daSEHcnjrkCCCwAwG347EJTYmZhS3d/SkzQxih/0XMAY0FgAQCGQ6vTJ+eVJx+umOSp+HB1xIxxStGLACNCYAEAhqymtSchU3OyskUd7vv6omCFvY3oRYBxIbAAAEPz/um6VXuKtDr9zsSwuFAf0XMAY0RgAQBuVa9W91xuaeqJypnj3bLUYRM9uP0GuDkCCwBwS8rqu2LTC07XdSRF+W1fGGhnw+03wA8isAAAPy0tv3Ztdomzve2HqyIWTBkjeg5g7AgsAMCPaesZWLWnOLvk2i+mjPm/uJAxznLRiwATQGABAH7QF1Ut8Rmaax192xcGPn33RCsuvwFuDYEFALgJnV7/8qcXXvr4/AR3p883zPvZeDfRiwBTQmABAL6vvrNvWVbhx+cbFwV7v7F4hpsjt98AQ0NgAQC+I6+8cenOwvZeLbffAMNGYAEA/mFgUPf7wxVb8yqmjnXOe3LONC8X0YsAU0VgAQBkMpmsqqU7LkNzqqZ1dcSdKTFBjnbcfgMMH4EFAJDtLb66Zm+JrbXV/uWzFgaNFT0HMHkEFgBYtK4+7W8PlP7t79V3T/TITAjzcXUQvQgwBwQWAFguTW17XEbBxebuLdGqF+erbKw55wqQBoEFAJZIr5elnrz0XG7ZGGf5Z2vnRvm7i14EmBUCCwAsTtP1/uW7inJL6/9jmtfbS0LcnTjmCpAYgQUAluXoxebETE3z9f6UmKCkSH9uvwEMgcACAEuh1emT88qTD1dM8lTkrowI8VGKXgSYLQILACzC5baehEzNiUst6nDf1xcFK+w55gowIAILAMzfB2fqVu4u0ur0mQlh8WE+oucA5o/AAgBz1qvVPZdbmnqicuZ4tyx12EQPhehFgEUgsADAbJ1r6IpNLyi51pEU5bdtYaC9jbXoRYClILAAwDyl5deuyy5R2NseXBXxiyljRM8BLAuBBQDmpqNX++S+kqzCKz+f5JkeH+qt5PYbYKQRWABgVr6+3BaXrqlu7d4SrdocrbLmnCtABAILAMzEjdtvNuWUeSvlx9bPnTuB228AYQgsADAHDV19y7KKPjrX8Giw95uLZ7g5cvsNIBKBBQAm73B549KsoraegZSYoI1R/qLnACCwAMCU3bj9ZmtexdSxzp88MXual4voRQBkMgILAExXVUt3fKbmy6pWdbjvjkXBTtx+AxgNAgsATNK+kmur9xTr9bLd6vDFIeNEzwHwHQQWAJiYnoHB5w+WpZ6onH3nqJ2JYX7uTqIXAfg+AgsATMnZus7Y9IKyhq7n7gvYumCyHbffAEaJwAIA06DXy944Vf3UB2c9nOyOrJ1zl7+H6EUAfhCBBQAmoOl6/4rdRTln6x8K8np7yQwPhb3oRQB+DIEFAMbu2MXmhExN0/X+lJigpEh/Lr8BjB+BBQDGa1Cn35pXnny4IsBTkbsyIsRHKXoRgFtCYAGAkbrc1pOQqTlxqUUd7vvao9Od5XzEBkwGjysAGKP9Z+pW7C4aGNRnJIQlhPmIngNgaAgsADAuvVrdc7mlr5ysDPd1y0oMC/BUiF4EYMgILAAwIucauuIyCoqvdmyI9Nu2MNCeY64A00RgAYCxSMuvXZdd4mRvk7sy4pdTx4ieA2D4CCwAEK+jV7s2u2Sn5sp9AZ7pCaHjlA6iFwG4LQQWAAj29eW2uHRNdWv3lmjV5miVNedcAaaPwAIAYfR6WerJS5tyyryV8qPr5s7zcxe9CIA0CCwAEKOhq+/xrKJD5xoeme795pIZoxztRC8CIBkCCwAE+LSiSb2zsK1nICUmaGOUv+g5ACRGYAHAiNLq9Ml55VvzKqaMcf54TcR0b26/AcwQgQUAI6e6tSc+Q/NFVYs63HfHomAnexvRiwAYBIEFACMku+Taqj3Fer1slzp8Scg40XMAGBCBBQAG1zMw+PzBstQTlRF3jMpSh/m5O4leBMCwCCwAMKyzdZ2x6QVn6zuTovy2Lwy04/YbwAIQWABgQGn5tWuzS1zkth+tnh09ebToOQBGCIEFAAbR3juwZm/JnqKr0ZNHp8WFjnWRi14EYOQY5CvVH3744d133+3i4jJ+/PhNmzZ1dnYa4lUAwGj9vbo19E/H95+pS4kJ+mj1bOoKsDTSB9Zf//rXuLi4VatWXblypbi42MvL6/3335f8VQDAOA3q9P995MJdf/nC3tb6y6TIjVH+XC0IWCCJ/4iwqqrqqaeeevPNNxMSEm685emnn5b2JQDAaNW29yZkaI5falaH+7726HRnOd+GAVgoiR/+t99+Wy6XL1myRNpfFgCM34GzdSt2F/drdenxoYnhvqLnABBJ4j8iPHny5LRp0/74xz9OmDBBLpdPmTLltddek/YlAMDY9A/qN35wJuadryeMcix4+i7qCoDEX8G6evXqhQsXGhoa9u7dO2nSpHfffXf9+vXd3d3PPPPMjZ9QVlZWWlr67XdpampydXXt7u6WdolF0Wq1PT09/B6arp6eHp1OZ8W36pim0rqOpbtLzzX3bph7x3/On2hvY8XDaFp4AE3ayHwGHBgYsLOzG9K7SBxYOp1ucHDwlVdemTlzpkwm27hx4+HDh19++eWnn37a2tpaJpOdPn169+7d334Xa2trJycnPh7dDgLL1HV3d/Px3URllTQ+/8klBxurrMVTf+7vpu3r1YqehKHiATRplhJYHh4eFRUV8+bN+9db5s2bl5ubW11d7efnJ5PJFi9evHjx4m+/y0svvSSTyTw9PaVdYlG0Wu3g4CC/h6bLysrKwcFBoVCIHoIh6OzTrt1Xkqm5cs9Ejz/P9wmddKfoRRgmHkCTptVqdTqdoT8DOjkN+Xorib8HKygo6Htv0ev10r4EAAiXf7kt7M/Hdxdd3RKt+nj1zLGKof2nLQCzJ3FgPfzwwzKZ7IsvvvjXW7788svRo0ffeSf/bQfAHOj1sv89cWneK5/3D+qOrpv70gOTrfmjJQD/RuI/IvzlL3957733btiwYefOnQEBAWlpabm5uX/5y19ufAMWAJi0xq7+x3cVfljW8PB0r7eWhIxy5AtXAG5O4sCysrL64IMPXnjhhV/96letra0qler//u//li5dKu2rAMDIO3KhSZ1Z2NLdnxITtDHKX/QcAEZN+lOGlUrlq6+++uqrr0r+KwOAEFqdPjmvfGtexeQxikNrIoK9laIXATB2XOMAAD+murUnIVPzeWWLOtx3x6JgJ3sb0YsAmAACCwB+0Hunr63aXazTy7ISw2JDfUTPAWAyCCwAuImegcHnD5alnvjpJS8AACAASURBVKicdYdbVmK4v8eQT8EBYMkILAD4vtL6zth0zZm6jqQov+0LA+1s+HvQAIaGwAKA70jLr12bXeIitz20evYDk0eLngPAJBFYAPAP7b0DT+wt2V10db5qdFp8qJeLXPQiAKaKwAIAmUwmO1XTGpeuqW3v3RKt2hyt4nx2ALeDwAJg6fR6WerJS8/mlPm4OhxfP3f2naNELwJg8ggsABatvrNvaVbhJ+cbH5sx7o3Fwa4O3H4DQAIEFgDL9cn5xqVZhd39g2nxoepwX9FzAJgPAguAJerT6jbllr5ysjLUx3WXOnySp0L0IgBmhcACYHHON3TFZWiKrrZviPT744OBcluOuQIgMQILgGVJy69d/95pB1vrAytmPRg4VvQcAOaJwAJgKTr7tOuyT2cU1N4b4JkeH+rj6iB6EQCzRWABsAgFte1x6QWVLd1bolUvzlfZWHPMFQADIrAAmLkbx1xtyikb6yL/bN3cSD930YsAmD8CC4A5a+zqX76r6GBZfcw0r7eWhLg7ccwVgJFAYAEwW59daErMLGzp7k+JCdoY5S96DgALQmABMENanT45r3xrXsXkMYpDayKCvZWiFwGwLAQWAHNT09oTn6n5vLJFHe77+qJghb2N6EUALA6BBcCsvH+6buXuokG9fmdiWFyoj+g5ACwUgQXATPRqdc/llqaeqJw53i1LHTbRg9tvAAhDYAEwB2X1XbHpBafrOpKi/LYvDLSz4fYbACIRWABMXlp+7drsEmd72w9XRSyYMkb0HAAgsACYsvbegSf3nd5VeOV+1ej0+FAvF7noRQAgkxFYAEzXVzVtcRkFNa09W6JVm6NV1lbcfgPAWBBYAEzPjdtvns0p83F1OL5+3pwJo0QvAoDvILAAmJj6zr5lWYUfn29cFOz9xuIZbo7cfgPA6BBYAExJXnnj0p2F7b1abr8BYMwILACmYWBQ9/vDFVvzKqaOdc57cs40LxfRiwDgBxFYAExAVUt3XIbmVE3rhki/Pz4YKLflmCsARo3AAmDs9hZfXb2nxM7Gav/yWQuDxoqeAwA/jcACYLw6+7Trs0+nF9TeM9EjIyHMx9VB9CIAuCUEFgAjpaltj00vuNTSvSVa9eJ8lY01x1wBMBkEFgCjc+OYq+dyy8Y4yz9bOzfK3130IgAYGgILgHFput6/fFdRbml9zDSvt5aEuDtxzBUA00NgATAin11oUu8sbL7enxITlBTpz+U3AEwUgQXAKGh1+uS88uTDFZM8FQdXRcwYpxS9CACGj8ACIN7ltp74DM3JyhZ1uO/ri4IV9jaiFwHAbSGwAAj2wZm6lbuLtDp9ZkJYfJiP6DkAIAECC4AwvVrdc7mlqScqZ453y1KHTfRQiF4EANIgsACIUVbfFZdRUHKtIynKb9vCQHsbbr8BYD4ILAACpOXXrssuUdjbHlwV8YspY0TPAQCJEVgARlRHr/bJfSVZhVd+PskzPT7UW8ntNwDMEIEFYOR8fbktLl1T3dq9JVq1OVplzTlXAMwUgQVgJNy4/ebZnLJxSvmx9XPnTuD2GwDmjMACYHANXX3Lsoo+OtfwaLD3m4tnuDly+w0AM0dgATCsQ+caHs8qut6vfXtJyPJZ40XPAYCRQGABMJT+Qd0LH57787GLwd7KXeq5U8Y4i14EACOEwAJgEFUt3fGZmi+rWtXhvjsWBTtx+w0AS0JgAZDevpJrq/cU6/WyPUvDH5sxTvQcABhpBBYAKfUMDD5/sCz1ROXsO0ftTAzzc3cSvQgABCCwAEjmbF1nbHpBWUPXlmjVi/NVNtYccwXAQhFYACSg18veOFX91AdnPZzsjqydc5e/h+hFACASgQXgdjVd71+xuyjnbP1/TPN6a/EMD4W96EUAIBiBBeC2HL3YnJipabrenxITlBTpz+U3ACAjsAAM26BOvzWvPPlwRYCnIndlRIiPUvQiADAWBBaA4bjc1pOQqTlxqUUd7vvao9Od5XwwAYBv8DERwJDtP1O3YnfRwKA+IyEsIcxH9BwAMDoEFoAh6NXqnsstfeVkZbivW1ZiWICnQvQiADBGBBaAW3WuoSs2vaDkWseGSL9tCwPtbaxFLwIAI0VgAbglafm167JLnOxtcldG/HLqGNFzAMCoEVgAfkJHr3ZtdslOzZX7AjzTE0LHKR1ELwIAY0dgAfgxX19ui0vXVLd2b4lWbY5WWXPOFQDcAgILwM3p9bLUk5c25ZR5K+VH182d5+cuehEAmAwCC8BNNHT1PZ5VdOhcw6PB3m8snjHK0U70IgAwJQQWgO/7tKJJvbOwrWcgJSZoY5S/6DkAYHoILADf0Or0yXnlW/Mqpoxx/nhNxHRvbr8BgOEgsAD8Q3VrT3yG5ouqFnW4745FwU72NqIXAYCpIrAAyGQyWXbJtVV7ivV62S51+JKQcaLnAIBpI7AAS9czMPj8wbLUE5URd4zKUof5uTuJXgQAJo/AAiza2brO2PSC0vqupCi/7QsD7bj9BgCkQGABlistv3ZtdomL3PbQ6ojoyaNFzwEA80FgAZaovXdg9Z6SvcVXHwryenvJDA+FvehFAGBWCCzA4vy9ujU+Q3O1ozclJigp0p/LbwBAcgQWYEEGdfqteeXJhysCPBVfJkWG+riKXgQA5onAAixFbXtvQobm+KVmdbjva49Od5bz+AOAofARFrAI+8/UrdxT3K/VpceHJob7ip4DAGaOwALMXJ9Wtym39JWTlWE+rrvU4QGeCtGLAMD8EViAOTvf0BWbUVB8tWNDpN+2hYH2HHMFACOCwALMVlp+7fr3TjvaWeesnPWrqWNFzwEAC0JgAWaos0+7dl9JpubKvQGeGQmh45QOohcBgGUhsABzk3+5LS5DU9XSvSVatTlaZc05VwAw4ggswHzo9bLUk5c25ZR5KeVH182d5+cuehEAWCgCCzATjV39j+8q/LCs4ZHp3m8umTHK0U70IgCwXAQWYA6OXGhKzCxs7e5PiQnaGOUveg4AWDoCCzBtWp0+Oa98a17F5DGKj9ZEBHsrRS8CABBYgCmrbu1JyNR8XtmiDvfdsSjYyd5G9CIAgExGYAGmK7vk2uo9xTq9LCsxLDbUR/QcAMA3CCzA9PQMDD5/sCz1ROWsO9yyEsP9PZxELwIAfAeBBZiY0vrO2HTNmbqOpCi/7QsD7bj9BgCMD4EFmJK0/Nq12SUucttDq2c/MHm06DkAgJsjsADT0N478MTekt1FV+erRqfFh3q5yEUvAgD8IAILMAGnalrj0jW17b3cfgMAJoHAAoyaTq9/5WTlszllvq4Ox9fPnX3nKNGLAAA/jcACjFd9Z9/SrMJPzjeqw31fe3S6s5wHFgBMgwH//tHDDz9sZWX1+OOPG+4lADN24Gxd0LajX1a1psWHpsWHUlcAYEIM9SF7z549x44ds7e3N9CvD5ixPq1uU27pKycrQ31cd6nDJ3kqRC8CAAyNQb6C1dzcvGHDhj/84Q92dnaG+PUBM3a+oWtO6slXTlZuiPT7YkMkdQUApsgggfXUU0/deeeda9asMcQvDpixtPzan6WcuNzWc2DFrP+NmSa35RBRADBJ0v8R4aFDh3bu3Hnq1Clraz43ALeqq3/wyf2FGQW19wZ4pseH+rg6iF4EABg+iQOrs7PziSeeePLJJ3/2s5/d9CdotVqtVvvtt+h0OisrK71eL+0Si6L/J9FDMEyFVzufOHChpq1364LJ/9/PA6x5IkwKD6Cp45+gSRuZf3x6vd5qiAcQShxYmzZt6uvr+/3vf/9DP+G//uu/kpOTv/2WuXPnhoSE1NbWSrvEomi12qamJj46mCK9XvaGpuG/P7822slm72MB4d6OV69cET0KQ6PVapubm3U6neghGKbW1la5XO7kxKXpJmlkHsDOzk6lUjmkd5EysM6fP//Xv/713XffdXNz+6Gf87vf/e53v/vdt9/y0ksvyWSy8ePHS7jE0mi1Wnt7ex8fH9FDMDQNXX2PZxUdOtewcIrHjkeCxnm4il6E4dBqtXK5fNy4caKHYJicnJwcHBwUCv5CiUkamQdwqHUlk/ab3FtbW/V6/dKlS63+6fr16++++66VldVHH30k4QsBZuCzC02hfzr+2YWmlJigdx6Z7OrAMVcAYD6kDKzZs2frv0uhUCxbtkyv1y9YsEDCFwJMmlanf+nj8/fv+Luro+2pp6I2RvmLXgQAkBj/0QyMqJrWnvhMzeeVLepw39cXBSvsbUQvAgBIj8ACRs57p6+t2l08qNdnJYbFhvI9cwBgtgwbWF1dXQb99QFT0avVPZdbmnqictYdblmJ4f4e/H0lADBnfAULMLiy+q7Y9ILTdR1JUX7bFwba2XAGLwCYOQILMKy0/Nq12SXO9rYfropYMGWM6DkAgJFAYAGG0t478OS+07sKr9yvGp0eH+rlIhe9CAAwQggswCC+qmmLyyioae3ZEq3aHK2yHuIdCwAAk0ZgARLT62WpJy89m1Pm4+pwfP28ORNGiV4EABhpBBYgpfrOvmVZhR+fb3xsxri/PRbs5mgnehEAQAACC5BMXnnj0p2F7b3alJggzmcHAEtGYAESGBjU/f5wxda8iqljnQ8/OSfIy0X0IgCASAQWcLuqWrrjMjSnalo3RPr98cFAuS3HXAGApSOwgNuSll+7/r3TDrbW+5fPWhg0VvQcAIBRILCAYers067PPp1eUHvPRI+MhDAfVwfRiwAAxoLAAoZDU9sem15wqaV7S7TqxfkqG2uOuQIAfIPAAobmxjFXz+WWjXGWf7Z2bpS/u+hFAACjQ2ABQ9B0vX/5rqLc0vqYaV5vLQlxd+KYKwDATRBYwK367EKTemdh8/X+lJigpEh/Lr8BAPwQAgv4aVqdPjmvPPlwxSRPxcFVETPGKUUvAgAYNQIL+AmX23riMzQnK1vU4b6vLwpW2NuIXgQAMHYEFvBj3j9dt2pPkVanz0wIiw/zET0HAGAaCCzg5nq1uudyS1NPVM4c75alDpvooRC9CABgMggs4CbK6rti0wtO13UkRfltWxhob8PtNwCAISCwgO9Ly69dl12isLc9uCriF1PGiJ4DADA9BBbwjY5e7ZP7SrIKr/x8kmd6fKi3kttvAADDQWAB//D15ba4dE11a/eWaNXmaJU151wBAIaLwAL+cfvNszll45TyY+vnzp3A7TcAgNtCYMHSNXT1Lcsq+uhcw6Jg7zcWz3Bz5PYbAMDtIrBg0Q6XN6p3Frb3alNigjZG+YueAwAwEwQWLNSN22+25lVMHeuc9+ScaV4uohcBAMwHgQVLVNXSHZ+p+bKqVR3uu2NRsBO33wAAJEVgweLsK7m2ek+xXi/bszT8sRnjRM8BAJghAgsWpGdg8PmDZaknKmffOWpnYpifu5PoRQAA80RgwVKcreuMTS8oa+jaEq16cb7KxppjrgAAhkJgwfzp9bI3TlU/9cFZDye7I2vn3OXvIXoRAMDMEVgwc03X+1fsLso5W/8f07zeWjzDQ2EvehEAwPwRWDBnRy82J2Zqmq73p8QEJUX6c/kNAGBkEFgwT4M6/da88uTDFQGeityVESE+StGLAAAWhMCCGbrc1pOQqTlxqUUd7vvao9Od5fx7DgAYUXzigbnZf6Zuxe6igUF9RkJYQpiP6DkAAEtEYMF89Gp1z+WWvnKyMtzXLSsxLMBTIXoRAMBCEVgwE+cauuIyCoqvdmyI9Nu2MNDexlr0IgCA5SKwYA7S8mvXZZc42dvkroz45dQxoucAACwdgQXT1tGrXZtdslNz5b4Az/SE0HFKB9GLAAAgsGDKvr7cFpeuqW7t3hKt2hytsuacKwCAcSCwYJL0elnqyUubcsq8lfKj6+bO83MXvQgAgG8QWDA9DV19j2cVHTrX8Mh07zeXzBjlaCd6EQAA30FgwcR8WtGk3lnY1jOQEhO0Mcpf9BwAAG6CwILJ0Or0yXnlW/Mqpoxx/nhNxHRvbr8BABgpAgumobq1Jz5D80VVizrcd8eiYCd7G9GLAAD4QQQWTEBW4ZUn95XYWlu99/jMh6d7iZ4DAMBPILBg1K73Dya9f+btr2oi/dx3JoaNd3MUvQgAgJ9GYMF4na3rjE0vOFvfmRTlt31hoB233wAATASBBSOVll+7NrvERW770erZ0ZNHi54DAMAQEFgwOu29A6v3lOwtvho9eXRaXOhYF7noRQAADA2BBePy9+rW+AzN1Y7elJigpEh/Lr8BAJgiAgvGYlCn35pXnny4IsBT8WVSZKiPq+hFAAAME4EFo1Db3puQoTl+qVkd7vvao9Od5fybCQAwYXwag3j7z9St3FPcr9Wlx4cmhvuKngMAwO0isCBSn1a3Kbf0lZOVYT6uWerwSZ4K0YsAAJAAgQVhzjd0xWYUFF/t2BDpt21hoD3HXAEAzAWBBTHS8mvXv3fa0c46Z+WsX00dK3oOAABSIrAw0jr7tGv3lWRqrtwb4JmREDpO6SB6EQAAEiOwMKLyL7fFZWiqWrq3RKs2R6usOecKAGCOCCyMEL1elnry0qacMi+l/Oi6ufP83EUvAgDAUAgsjITGrv7HdxV+WNbwyHTvN5fMGOVoJ3oRAAAGRGDB4I5caErMLGzt7k+JCdoY5S96DgAABkdgwYC0On1yXvnWvIrJYxQfrYkI9laKXgQAwEggsGAo1a09CZmazytb1OG+OxYFO9nbiF4EAMAIIbBgENkl11bvKdbpZVmJYbGhPqLnAAAwoggsSKxnYPD5g2WpJypn3eGWlRju7+EkehEAACONwIKUSus7Y9M1Z+o6kqL8ti8MtOP2GwCARSKwIJm0/Nq12SUucttDq2c/MHm06DkAAAhDYEEC7b0DT+wt2V10db5qdFp8qJeLXPQiAABEIrBwu07VtMala2rbe7n9BgCAGwgsDJ9Or3/lZOWzOWW+rg7H18+dfeco0YsAADAKBBaGqb6zb2lW4SfnG9Xhvq89Ot1Zzr9LAAD8A58UMRwHztat2F3cr9WlxYeqw31FzwEAwLgQWBiaPq1uU27pKycrQ31cd6nDJ3kqRC8CAMDoEFgYgvMNXXEZmqKr7Rsi/f74YKDclmOuAAC4CQILtyotv3b9e6cdbK0PrJj1YOBY0XMAADBeBBZ+Wmefdl326YyC2nsDPDMSQscpHUQvAgDAqBFY+AkFte2x6QVVLd1bolUvzlfZWHPMFQAAP4HAwg/S62WpJy9tyinzUso/Wzc30s9d9CIAAEwDgYWba+zqX76r6GBZ/cPTvd5cHOLuZCd6EQAAJoPAwk0cudCkzixs6e5PiQnaGOUveg4AACaGwMJ3aHX65LzyrXkVk8coDq2JCPZWil4EAIDpIbDwjZrWnvhMzeeVLepw39cXBSvsbUQvAgDAJBFY+If3Tl9btbt4UK/PSgyLDfURPQcAABNGYEHWq9U9l1uaeqJy1h1uWYnh/h5OohcBAGDaCCxLV1rfGZeuOV3XkRTlt31hoJ0Nt98AAHC7CCyLlpZfuza7xNne9tDq2Q9MHi16DgAAZoLAslDtvQNP7C3ZXXT1ftXo9PhQLxe56EUAAJgPAssSfVXTFpdRUNPasyVatTlaZW3F7TcAAEiJwLIsN26/eTanzMfV4cSv582+c5ToRQAAmCECy4LUd/Ytyyr8+HzjYzPG/e2xYDdHbr8BAMAgCCxLkVfeuHRnYXuvlttvAAAwNALL/A0M6n5/uGJrXkWIj/LY+nDVaIXoRQAAmDkCy8yVN16PTS8outq+IdLvjw8Gym055goAAIOT/tNtTU3NCy+8MH36dIVCERAQkJSU1NzcLPmr4Fak5deG/8/xy209B1bM+t+YadQVAAAjQ/qvYC1durShoeF//ud/IiMjS0tLly9f/vHHHxcWFjo5cQHLyOns067PPp1eUHvPRI+MhDAfVwfRiwAAsCDSf0lj/vz5X3/99QMPPKBQKGbOnLljx47y8vJ9+/ZJ/kL4IQW17eF/Pp5VeGVLtOrwk3OoKwAARpj0X8H6f//v/337h/7+/jKZrLq6WvIXwr+7cczVppyysS7yI2vnRvm7i14EAIAlMvg3uX/00Ueyf2YWDKrpev/jWUUHy+pjpnm9tSTE3YljrgAAEMOwgdXU1PTiiy+OHz/+kUceMegL4YvLnU+9WdrS3c8xVwAACGfAwBoYGFiyZEljY+Mnn3zi6Oh4441paWnvvvvut3+aUqkMCAhoaGgw3BLzptXp//v45Ve/qgtwd9i5NGjqaCd+M01Oa2urXC6/fv266CEYDq1W29TUZGvLqTemigfQpI3MA3j9+nWFYminSBpqkF6vX7Zs2WeffZaRkXHPPff86+1RUVE+Pj7f/pk5OTlyuVypVBpoiXmraetdtvv032vaYoNG/WVRqJO9jehFGA6tViuXy4f69MJIaLXavr4+PoiZLh5AkzYyD6BcLh/quxgqsJ5++umsrKxXX301Pj7+22/38/Pz8/P79ltOnDghk8kcHPibbkP2/um6VXuKtDp9etyMe71t3JV8dDBVcrncwcGBp8BE3fj0zD8+08UDaNJG5gEcxlfIDBJYL7/8ckpKSnJy8vr16w3x66NXq3sutzT1ROXM8W5Z6rA7XeX19fWiRwEAgH+QPrDeeeedF1544be//e33zmuAVMrqu2LTC07XdSRF+W1bGGhvY63VakWPAgAA35D+oNE//elPN/6v1bf8+te/lvyFLFNafu3MlON1nX0fror435hp9jbcfgMAgNGR/itYZ86ckfzXhEwm6+jVPrGvZFfhlftVo9PiQryVfLsAAABGir9XbBq+qmmLyyioae3ZEq3aHK2ytrISvQgAAPwgAsvY3bj95tmcMh9Xh+Pr582ZMEr0IgAA8BMILKPW0NW3dGfhx+cbFwV7v7F4hpsjt98AAGACCCzjdbi8Ub2zsL1Xy+03AACYFgLLGGl1+uS88q15FVPHOuc9OWeal4voRQAAYAgILKNT1dIdl6H5e3WrOtz3r48FO9px+w0AACaGwDIue4uvrtlbYmNtdWDFrIVBY0XPAQAAw0FgGYuegcHnD5alnqi8e6JHRkKYryvHXAEAYKoILKOgqW2Pyyi42Ny9JVr14nyVjTXHXAEAYMIILMFuHHP1XG7ZGGf5kbVz7vL3EL0IAADcLgJLpKbr/ct3FeWW1v/HNK+3Fs/wUNiLXgQAACRAYAlz9GJzYqam+Xp/SkxQUqQ/l98AAGA2CCwBBnX6rXnlyYcrJnkqcldGhPgoRS8CAABSIrBG2uW2noRMzYlLLepw39cXBSvsOeYKAABzQ2CNqA/O1K3cXaTV6TMSwhLCfETPAQAABkFgjZBere653NLUE5U/G++WlRgW4KkQvQgAABgKgTUSzjV0xaYXlFzrSIry27Yw0N7GWvQiAABgQASWwaXl167LLnGytzm4KuIXU8aIngMAAAyOwDKgjl7tk/tKsgqv/HySZ3p8qLeS228AALAIBJahfH25LS5dU93avSVatTlaZc05VwAAWAwCS3o3br/ZlFPmrZQfWz937gR30YsAAMCIIrAk1tDV93hW0aFzDY8Ge7+xeMYoRzvRiwAAwEgjsKR0uLxxaVZRW89ASkzQxih/0XMAAIAYBJY0tDp9cl751ryKKWOcP14TMd2b228AALBcBJYEqlt74jIKvqxqVYf77lgU7MTtNwAAWDYC63btK7m2ek+xXi/brQ5fHDJO9BwAACAegTV8PQODzx8sSz1RGXHHqCx1mJ+7k+hFAADAKBBYw3S2rjM2vaC0vispym/7wkA7br8BAAD/RGANR1p+7drsEndHuyNr59w90UP0HAAAYFwIrKFp6xlYs7dkb/HVh4K83l4yw0NhL3oRAAAwOgTWEBy72JyYqWm83p8SE5QU6c/lNwAA4KYIrFsyqNNvzStPPlwR4Kk4sHJWqI+r6EUAAMB4EVg/rba9NyFDc/xSszrc97VHpzvL+U0DAAA/hlb4CfvP1K3cU9yv1aXHhyaG+4qeAwAATACB9YP6tLpNuaWvnKwM83HdpQ4P8FSIXgQAAEwDgXVz5xq64jIKiq92bIj027Yw0J5jrgAAwC0jsG4iLb92XXaJk71N7sqIX04dI3oOAAAwMQTWd3T0atdll2RqrtwX4JmeEDpO6SB6EQAAMD0E1jfyL7fFZWiqWrq3RKs2R6usOecKAAAMC4Elk8lker0s9eSlTTllXkr50XVz5/m5i14EAABMGIEla+zqf3xX4YdlDY9M935zyYxRjnaiFwEAANNm6YH1aUWTemdha3d/SkzQxih/0XMAAIA5sNzA0ur0yXnlW/Mqpoxx/mhNRLC3UvQiAABgJiw0sKpbe+IzNF9UtajDfXcsCnaytxG9CAAAmA9LDKzskmur9xTr9LJd6vAlIeNEzwEAAObGsgKrZ2Dw+YNlqScqZ93hlpUY7u/hJHoRAAAwQxYUWKX1nbHpmjN1HUlRftsXBtpx+w0AADAMSwmsd766vC67xN3J/tMn59wb4Cl6DgAAMGeWElieCvv7VaPfiQ3xVNiL3gIAAMycpQTWwqCxC4PGil4BAAAsAt+HBAAAIDECCwAAQGIEFgAAgMQILAAAAIkRWAAAABIjsAAAACRGYAEAAEiMwAIAAJAYgQUAACAxAgsAAEBiBBYAAIDECCwAAACJEVgAAAASI7AAAAAkRmABAABIjMACAACQGIEFAAAgMQILAABAYgQWAACAxAgsAAAAiRFYAAAAEiOwAAAAJGYreoCsqqqqqqrqpZdeEj3EhOl0uuvXr7u4uIgegmHq6emxtbW1s7MTPQTDwQNo6ngATdrIPIBHjx6dMGHCkN5F/FewQkJChjoa3zMwMHD27FnRKzB8NTU1zc3NoldgmPr7+3kATVp1dXVLS4voFRim/v7+0tJSQ7/KhAkTQkJChvQuVnq93kBrMGJqamoiIyNrampED8EwLV++/K677lq+fLnoIRiOqqqqP5FITgAABolJREFUe+65p6qqSvQQDNPSpUvvv//+pUuXih6C4bh48WJ0dPTFixdFD/k+8V/BAgAAMDMEFgAAgMQILAAAAIkRWAAAABKz4XwE8+Dg4DBnzhzRKzBMVlZWU6ZM8fLyEj0Ew+Tg4DB79mzRKzB8U6dO5QE0UVZWVo6OjhEREaKHfB9/ixAAAEBi/BEhAACAxAgsAAAAiRFYAAAAEiOwAAAAJEZgmbaampoXXnhh+vTpCoUiICAgKSmJK+1M1MMPP2xlZfX444+LHoIh+/DDD++++24XF5fx48dv2rSps7NT9CLcqiNHjtx3332enp5KpXLmzJkZGRmiF+EH6XS6Tz/9dPny5Uql0srK6qaXUzU0NKjVand3d2dn5wceeEDsJaEElmlbunTpBx98sH379oaGhqysrCNHjsydO7e7u1v0LgzNnj17jh07Zm9vL3oIhuyvf/1rXFzcqlWrrly5Ulxc7OXl9f7774sehVty6tSpBQsWTJgw4cyZM5cvX3744YfVanVaWproXbi5U6dO/eEPf4iKinrmmWdu+hMGBgaio6MvXLig0Wiqq6s9PDzuueeea9eujfDOb+hhypKTk7u6uv71wxMnTshksnfffVfgJAxVU1PTmDFjXn/9dYVCsWzZMtFzMASVlZUODg4ZGRmih2A4fvOb31hbW1///9u7v5Cm+jiO42dhDWeM1ZSBIDqjVKYXhoEglEpGaBjtZtCgwAstps4m7MKRIBqDCBUWQhBt80IvvNoI7CpvJK+6ihWThiUoWnN6UJMQPc+FKEOfh2fuOfhrPu/X3fmyiw/s32fn/M5vm5sHk9LS0lu3bgmMhFQMDQ1JkjQ3N3doHggEJEn6/Pnz3uH6+rper3/y5MlJ59vHGazM5vF4cnJyDg6Li4slSfr+/bu4RDi2rq6uwsLC1tZW0UFwbG/evNFqtTabTXQQpCMrK0uj0SRPFEXJysoSlQf/UTgcvnTpUllZ2d7h+fPn6+vrQ6GQqDwUrFPl3bt30n7NQkaYnJwcGxsbGRk5c4Y3Y+aZnp4uLy9//vx5UVGRVqstLS0dGRkRHQqpevz4cW5ubnt7+/LysizLXq93fn7e7XaLzoU0RSKRK1euJE9KSkrm5ua2traE5KGqnx7xePzp06cFBQVWq1V0FqRkfX29ra3t0aNHVVVVorMgHYuLi1+/fv3x48fExMTly5eDwaDD4fj169c/rRHBH8VsNodCIavV6vf7JUnS6XR+v//GjRuicyFNiUSisrIyeWIwGBRFWVtby87OPvk8/Gg+Jba3t20228+fP0dHR4W8kpAGt9v9+/fvZ8+eiQ6CNO3u7u7s7Ph8vmvXrhkMBqfTeefOHa/Xu7u7Kzoa/t3MzMzNmzfv3r27sLCQSCT6+/vtdnswGBSdC2lSjvz139HJSaJgnQaKojx8+HBqaioQCNTW1oqOg5REo9FXr169ePHCYDCIzoI0GY1GSZJqamoOJjU1NYlEgnWQGaG3t9dkMr18+TI/P//ChQsul6upqYmzj5nr4sWLsiwnT2RZ1mg0oj5jKVingcvlGh8f9/l89+/fF50FqVpdXVUU5cGDB5p9m5ubwWBQo9HsraXDn89isRyaiP3FjGOZnZ0tKSlJXv5osVji8fja2prAVEibxWKZnZ1NnkSjUbPZLOqqDgUr43m93uHh4YGBAYfDIToLjqG6uvrQPb0H2zTcvn1bdDqk5N69e5Ikffjw4WAyMzOTl5dXWFgoLhRSVVBQEI1Gk6/nRiIRvV6v1+sFpkLampubY7HYly9f9g43Njbev3/f3NwsKg8FK7P5/f6enp7u7m6PxyM6C/C/09jYWFdX19HR8fHjR1mWfT7f27dv+/r6uCc0Izidzlgs5nQ6l5aWVldXBwcHw+FwZ2cnT1+GstvtFRUVLS0t3759W1lZaW1tPXv2rMhrvie56RZUd/QKhSRJDodDdC6kg41GM5Esyw6Hw2QynTt3rry8nG1+M8vk5OT169eNRqNer7969err1693dnZEh8Lf297ePvp919TUlPyYpaUlu91uMBh0Ol1DQ8OnT59EpVUURaOwYgAAAEBVnAgFAABQGQULAABAZRQsAAAAlVGwAAAAVEbBAgAAUBkFCwAAQGUULAAAAJVRsAAAAFRGwQIAAFAZBQsAAEBlFCwAAACVUbAAAABURsECAABQGQULAABAZRQsAAAAlVGwAAAAVEbBAgAAUBkFCwAAQGV/Ad45EyhSehgVAAAAAElFTkSuQmCC\">\n\n<pre><code class=\"language-julia\">DataFrame(A = [1, 2], B = [3, 4], C = [\"some\", \"text\"])</code></pre>\n<table>\n<tr><th>A</th>\n<th>B</th>\n<th>C</th></tr>\n<tr><td>1</td>\n<td>3</td>\n<td>\"some\"</td></tr>\n<tr><td>2</td>\n<td>4</td>\n<td>\"text\"</td></tr>\n</table>\n\n","category":"page"}]
}
