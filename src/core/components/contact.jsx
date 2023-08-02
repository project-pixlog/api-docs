/**
 * @prettier
 */
import React from "react"
import PropTypes from "prop-types"
import { safeBuildUrl } from "core/utils/url"
import { sanitizeUrl } from "core/utils"

class Contact extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    getComponent: PropTypes.func.isRequired,
    specSelectors: PropTypes.object.isRequired,
    selectedServer: PropTypes.string,
    url: PropTypes.string.isRequired,
  }

  render() {
    const { data, getComponent, selectedServer, url: specUrl } = this.props
    const name = data.get("name", "the developer")
    const url = safeBuildUrl(data.get("url"), specUrl, { selectedServer })
    const email = data.get("email")

    const Link = getComponent("Link")

    return (
      <div className="info__contact">
        {url && (
          <div>
            <Link href={sanitizeUrl(url)} target="_blank">
              {name} - Website
            </Link>
          </div>
        )}
        {email && (
          <Link href={sanitizeUrl(`mailto:${email}`)}>
            {url ? `Envie um email para ${name}` : `Contato ${name}`}
          </Link>
        )}
      </div>
    )
  }
}

export default Contact
